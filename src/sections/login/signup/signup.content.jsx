import React from 'react'
import { useForm } from 'react-hook-form'
import { enviroments } from '../../../enviroments/enviroments'

const SignupContent = ({ fetching, error, onData }) => {

    const inputs = [
        //{ req: true, id: 'displayName', label: 'Your name', Name: 'displayName', reqMess: 'Your name is required', placeholder: 'example name', type: 'text' },
        { req: true, id: 'email', label: 'Email', Name: 'email', reqMess: 'email is required', placeholder: 'example@email.com', type: 'email', patt: enviroments.pattern },
        { req: true, id: 'password', label: 'Password', Name: 'password', reqMess: 'please type your password', placeholder: '*******', type: 'password', min: 8, minMess: 'Password must be a minimum of 8 characters' },
        { req: true, id: 'password2', label: 'Repeat Password', Name: 'password2', reqMess: 'please type again your password', placeholder: '*******', type: 'password', min: 8, minMess: 'Password must be a minimum of 8 characters' }
    ]

    const { register, errors, handleSubmit, setError } = useForm()

    const onSubmit = (data, event) => {
        const { password, password2 } = data
        if (password !== password2) {
            setError("password", "notMatch", "password no match")
            setError("password2", "notMatch", "password no match")
            return
        } else {
            onData(data)
            event.target.reset()
        }
    }

    const spinnerButton = () => {
        return (
            <button className="btn btn-success" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        )
    }

    const normaButton = () => {
        return (
            <button className="btn btn-success">
                Send
            </button>
        )
    }

    const conditionalButton = () => {
        return (
            fetching
                ? spinnerButton()
                : normaButton()
        )
    }

    const renderError = (message) => {
        return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {message
                    ? <p>{message}</p>
                    : <p>no errors</p>
                }
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }


    return (
        <div>
            <div className="container">
                <div className="row my-5 justify-content-center">
                    <div className="col-5">
                        <p className="h2 text-center mb-4">Sign up</p>
                        <div className="card card-login">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {inputs.map(({ Name, req, reqMess, placeholder, type, patt, min, minMess, id, label }) => {
                                        return (
                                            <div key={Name} className="form-group">
                                                <label htmlFor={id}>{label}</label>
                                                <input
                                                    id={id}
                                                    className="form-control"
                                                    placeholder={placeholder}
                                                    type={type}
                                                    name={Name}
                                                    ref={register({
                                                        required: {
                                                            value: req,
                                                            message: reqMess
                                                        },
                                                        pattern: {
                                                            value: patt
                                                        },
                                                        minLength: {
                                                            value: min,
                                                            message: minMess
                                                        }
                                                    })}
                                                />
                                                <span className="text-danger text-small d-block mb-2">
                                                    {errors[Name] && errors[Name].message}
                                                </span>
                                            </div>
                                        )
                                    })}

                                    {conditionalButton()}
                                </form>
                            </div>
                        </div>
                        <div className="my-5">
                            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {renderError(error)}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignupContent