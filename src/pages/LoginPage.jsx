import React from 'react'

import SinginContainer from '../sections/login/signin/singinContainer'
import Navbar from '../components/Navbar'

const LoginPage = () => {

    return(
        <div>
            <Navbar />
            <SinginContainer />
        </div>
    )

}

export default LoginPage;