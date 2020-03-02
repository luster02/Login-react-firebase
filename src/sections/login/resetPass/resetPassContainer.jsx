import React from 'react';
import {connect} from 'react-redux';
import ResetPassContent from './resetPassContent';
import { resetPasswordAction } from '../../../redux/actions/loginActions';

const ResetPassContainer = ({fetching, error, ok, resetPasswordAction}) => {

    const handleData = async ({email}) => {
        resetPasswordAction({email})
    }

    return(
        <div>
            <ResetPassContent
                fetching={fetching}
                error={error}
                onData={handleData}
                ok={ok}
            />
        </div>
    )

}

const mapStateToProps = ({login}) => {
    return {
        fetching: login.fetching,
        error: login.error,
        ok: login.ok
    }
}

const actions = {
    resetPasswordAction
}

export default connect(mapStateToProps, actions) (ResetPassContainer)