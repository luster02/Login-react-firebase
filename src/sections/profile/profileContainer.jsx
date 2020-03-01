import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getSesionAction, emailVerifyAction } from '../../redux/actions/loginActions'
import ProfileContent from './profileContent'

const ProfileContainer = ({ fetching, logged, user, getSesionAction, emailVerifyAction }) => {

    useEffect(() => {
        getSesionAction()
    },[getSesionAction])

    const handleEmailVerify = () => {
        emailVerifyAction()
    }

    return(
        <div>
            <ProfileContent 
                fetching={fetching}
                user={user}
                onEmailVerify={handleEmailVerify}
            />
        </div>
    )

}

const mapStateToProps = ({ login }) => {
    return {
        fetching: login.fetching,
        logged: login.logged,
        user: login.user
    }
}

const actions = {
    getSesionAction,
    emailVerifyAction
}


export default connect(mapStateToProps, actions)(ProfileContainer)