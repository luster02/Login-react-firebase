import React from 'react'
import { connect } from 'react-redux'

import { registerAction, getSesionAction } from '../../../redux/actions/loginActions'

import SignupContent from './signup.content'

const SignupContainer = ({fetching, error, registerAction, getSesionAction}) => {

    const handleData = async (data) => {
        const { email, password } = data
        await registerAction({email, password})
        getSesionAction()
    }

    return(
        <div>
            <SignupContent
                onData={handleData}
                fetching={fetching}
                error={error}
            />
        </div>
    )

}

const mapStateToProps = ({login}) => {
    return {
        fetching: login.fetching,
        error: login.error,
    }
}

const actions = {
    registerAction,
    getSesionAction
}

export default connect(mapStateToProps, actions)(SignupContainer)