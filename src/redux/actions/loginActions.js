import firebase from 'firebase/app'
import {firebaseConfig} from '../../firebase'
import 'firebase/auth'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

export const EMAIL_VERIFY = "EMAIL_VERIFY"
export const EMAIL_VERIFY_SUCCESS = "EMAIL_VERIFY_SUCCESS"
export const EMAIL_VERIFY_ERROR = "EMAIL_VERIFY_ERROR"

export const SIGN_IN_GOOGLE = "SIGN_IN_GOOGLE"
export const SIGN_IN_GOOGLE_SUCCESS = "SIGN_IN_GOOGLE_SUCCESS"
export const SIGN_IN_GOOGLE_ERROR = "SIGN_IN_GOOGLE_ERROR"

export const RESET_PASSWORD = "RESET_PASSWORD"
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS"
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR"

export const LOAD_FIREBASE = "LOAD_FIREBASE"
export const LOAD_FIREBASE_SUCCESS = "LOAD_FIREBASE_SUCCESS"
export const LOAD_FIREBASE_ERROR = "LOAD_FIREBASE_ERROR"  

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_ERROR = "REGISTER_ERROR"

export const LOGOUT = "LOGOUT"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_ERROR = "LOGOUT_ERROR"

export const GET_SESION = "GET_SESION"
export const GET_SESION_SUCCESS = "GET_SESION_SUCCESS"
export const GET_SESION_ERROR = "GET_SESION_ERROR"

export const loadFirebaseAction =  () => async (dispatch, getState) =>  {
    
    dispatch({
        type: LOAD_FIREBASE
    })
    try {
        await firebase.initializeApp(firebaseConfig)
        dispatch({
            type: LOAD_FIREBASE_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: LOAD_FIREBASE_ERROR,
            payload: error
        })
    }
    
}

export const emailVerifyAction = () => (dispatch, getState) => {
    dispatch({
        type: EMAIL_VERIFY
    })
    const user = firebase.auth().currentUser
    return user.sendEmailVerification().then(() => {
        dispatch({
            type: EMAIL_VERIFY_SUCCESS,
            payload: 'ok'
        })
    })
    .catch(error => {
        console.log(error)
        dispatch({
            type: EMAIL_VERIFY_ERROR,
            payload: error.message
        })
        return error.message
    })
}

export const resetPasswordAction = ({email}) => (dispatch, getState) => {
    dispatch({
        type: RESET_PASSWORD
    })
    console.log(email)
    return firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                payload: 'ok'
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: RESET_PASSWORD_ERROR,
                payload: error.message
            })
            return error.message
        })
}

export const signinGoogleAction = () => (dispatch, getState) => {
    const provider = new firebase.auth.GoogleAuthProvider()
    dispatch({
        type: SIGN_IN_GOOGLE
    })
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        return firebase.auth().signInWithPopup(provider)
            .then(({user: {uid, displayName, photoURL, email, emailVerified}}) => {
                let User = { uid, displayName, photoURL, email, emailVerified  }
                dispatch({
                    type: SIGN_IN_GOOGLE_SUCCESS,
                    payload: User
                })
                return User
            })
    })
    .catch(error => {
        console.error(error.message);
        dispatch({
            type: SIGN_IN_GOOGLE_ERROR,
            payload: error.message
        })
        return error.message
    })
}

export const loginAction = ({email, password}) => (dispatch, getState) => {
    dispatch({
        type: LOGIN
    })
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user: { uid, displayName, photoURL, email, emailVerified }})  => {
                let User = { uid, displayName, photoURL, email, emailVerified  }
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: User
                })
                return User
            })

    })
    .catch(error => {
        console.error(error.message);
        dispatch({
            type: LOGIN_ERROR,
            payload: error.message
        })
        return error.message
    })
}

export const registerAction = ({email, password}) => (dispatch, getState) => {
    dispatch({
        type: REGISTER
    })
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user: { uid, displayName, photoURL, email, emailVerified }})  => {
                let User = { uid, displayName, photoURL, email, emailVerified  } 
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: User
                })
                return User
            })
    })
    .catch(err => {
        console.error(err);
        dispatch({
            type: REGISTER_ERROR,
            payload: err
        })
    })
}


export const getSesionAction = () => async (dispatch, getState) => {
    const User = firebase.auth().currentUser 
    dispatch({
        type: GET_SESION
    })
    if(User){
        const {uid, displayName, photoURL, email, emailVerified} = User
        const user = {uid, displayName, photoURL, email, emailVerified} 
        dispatch({
            type: GET_SESION_SUCCESS,
            payload: user
        })
    }else{
        dispatch({
            type: GET_SESION_ERROR
        })
    }
}

export const logoutAction = () => (dispatch, getState) => {
    dispatch({
        type: LOGOUT
    })
    firebase.auth().signOut().then(() => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        })
        .catch(err => {
            dispatch({
                type: LOGOUT_ERROR,
                payload: err
            })
        })
}