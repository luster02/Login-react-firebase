import React from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../redux/actions/loginActions'
import { Link } from 'react-router-dom'

const Navbar = ({ fetching, logged, logoutAction }) => {

    const loginPath = [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' }
    ]

    const generalPath = [
        { name: 'Home', path: '/' },
        { name: 'Profile', path: '/profile' }
    ]

    const mapLoginPath = () => {
        return (
            loginPath.map(path => {
                return (
                    <li key={path.name} className="nav-item ">
                        <Link className="nav-link" to={path.path} >{path.name}</Link>
                    </li>
                )
            })
        )
    }

    const mapGeneralPath = () => {
        return (
            generalPath.map(path => {
                return (
                    <li key={path.name} className="nav-item ">
                        <Link className="nav-link" to={path.path} >{path.name}</Link>
                    </li>
                )
            })
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to={'/'}><span className="h2">Q</span>&<span className="h2">A</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {logged
                            ? mapGeneralPath()
                            : mapLoginPath()
                        }
                    </ul>
                    {logged && 
                    <button 
                    onClick={logoutAction}
                    className="btn btn-outline-danger btn-sm">
                        logout
                    </button>
                    }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ({ login }) => {
    return {
        fetching: login.fetching,
        logged: login.logged,
    }
}

const actions = {
    logoutAction
}

export default connect(mapStateToProps, actions)(Navbar);