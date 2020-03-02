import React from 'react';
import { useForm } from 'react-hook-form'
import { enviroments } from '../../../enviroments/enviroments'


const ResetPassContent = ({fetching, error, onData, ok}) => {

    const inputs = [
        { req: true, id: 'email', label: 'Email', Name: 'email', reqMess: 'email is required', placeholder: 'example@email.com', type: 'email', patt: enviroments.pattern },
    ]

    const { register, errors, handleSubmit, } = useForm()

    const onSubmit = (data, event) => {
        onData(data)
        event.target.reset()
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


    return (
        <div>
            <div className="container">
                <div className="row my-5 justify-content-center">
                    <div className="col-5">
                        <p className="h2 text-center mb-5">Reset your password</p>
                        <div className="card  card-login">
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
                                {error}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>}
                            
                            {ok && <div className="alert alert -success alert-dismissible fade show" role="alert">
                                an email has been sent to you please check your inbox
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

export default ResetPassContent