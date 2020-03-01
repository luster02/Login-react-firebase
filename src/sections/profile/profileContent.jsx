import React from 'react'

import { LoaderSpinner } from '../../components/LoaderSpiner';

const ProfileContent = ({ user, fetching, onEmailVerify }) => {

    const renderAlert = () => {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    Your email is not verified! please confirm your email address
                    <button className="btn btn-link" onClick={onEmailVerify} >confirm Here</button>.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }



    return (
        <div>
            { !user.emailVerified && renderAlert()}
            <div className="container">
                { fetching && <LoaderSpinner/>}
                <h1>{user.displayName}</h1>
                <span className="my-2 h3">{user.email}</span>
            </div>
        </div>
    )

}


export default ProfileContent