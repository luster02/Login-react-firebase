//import axios from 'axios'
import firebase from 'firebase/app'
import {firebaseConfig} from '../../firebase'
import 'firebase/auth'

//const url = "https://flutter-firebase.herokuapp.com/"
//const dev_url = "http://localhost:3500/user"

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

export const EMAIL_VERIFY = "EMAIL_VERIFY"
export const EMAIL_VERIFY_SUCCESS = "EMAIL_VERIFY_SUCCESS"
export const EMAIL_VERIFY_ERROR = "EMAIL_VERIFY_ERROR"

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
    console.log(user)
    user.sendEmailVerification().then(() => {
        dispatch({
            type: EMAIL_VERIFY_SUCCESS,
        })
    })
    .catch(error => {
        console.log(error)
        dispatch({
            type: EMAIL_VERIFY_ERROR,
            payload: error
        })
    })
}

export const loginAction = ({email, password}) => (dispatch, getState) => {
    dispatch({
        type: LOGIN
    })
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async({user: { uid, displayName, photoURL, email, emailVerified }})  => {
            let User = { uid, displayName, photoURL, email, emailVerified  } 
            const token = await firebase.auth().currentUser.getIdToken()
            User.token = token
            User = JSON.stringify(User)
            localStorage.setItem('fb-user', User)
            User = JSON.parse(User)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: User
            })
            return User
        })
        .catch(error => {
            //console.error(error.message);
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
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user: { uid, displayName, photoURL, email, emailVerified }})  => {
            let User = { uid, displayName, photoURL, email, emailVerified  } 
            const token = await firebase.auth().currentUser.getIdToken()
            User.token = token
            User = JSON.stringify(User)
            localStorage.setItem('fb-user', User)
            User = JSON.parse(User)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: User
            })
            return User
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
    let storage = localStorage.getItem('fb-user') || ''
    if(storage){
        storage = JSON.parse(storage) 
    } 
    dispatch({
        type: GET_SESION
    })
    if(storage.uid && storage.token){
        dispatch({
            type: GET_SESION_SUCCESS,
            payload: storage
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
            localStorage.removeItem('fb-user')
        })
        .catch(err => {
            dispatch({
                type: LOGOUT_ERROR,
                payload: err
            })
        })
}