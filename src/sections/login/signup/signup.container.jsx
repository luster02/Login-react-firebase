import React from 'react'
import { connect } from 'react-redux'

import { registerAction, getSesionAction, signinGoogleAction } from '../../../redux/actions/loginActions'

import SignupContent from './signup.content'

const SignupContainer = ({fetching, error, registerAction, getSesionAction, signinGoogleAction}) => {

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
                signinGoogleAction={signinGoogleAction}
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
    getSesionAction,
    signinGoogleAction
}

export default connect(mapStateToProps, actions)(SignupContainer)