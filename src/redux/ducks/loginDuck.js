import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    GET_SESION,
    GET_SESION_SUCCESS,
    GET_SESION_ERROR,
    LOAD_FIREBASE,
    LOAD_FIREBASE_ERROR,
    LOAD_FIREBASE_SUCCESS,
    EMAIL_VERIFY,
    EMAIL_VERIFY_SUCCESS,
    EMAIL_VERIFY_ERROR,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    SIGN_IN_GOOGLE,
    SIGN_IN_GOOGLE_SUCCESS,
    SIGN_IN_GOOGLE_ERROR,
} from '../actions/loginActions'

const initialState = {
    fetching: false,
    logged: false,
    ok: '',
    user: {},
    error: ''
}

export const loginReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOGIN: 
            return {
                ...state,
                fetching: true,
            }

        case LOGIN_SUCCESS: 
            return {
                ...state,
                fetching: false,
                logged: true,
            }

        case LOGIN_ERROR: 
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case REGISTER: 
            return {
                ...state,
                fetching: true,
            }

        case REGISTER_SUCCESS: 
            return {
                ...state,
                logged: true,
                fetching: false,
                token: actions.payload
            }

        case REGISTER_ERROR: 
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case LOGOUT: 
            return {
                ...state,
                fetching: true,
            }

        case LOGOUT_SUCCESS: 
            return {
                ...state,
                fetching: false,
                logged: false,
                token: '',
                user: {}
            }

        case LOGOUT_ERROR: 
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case GET_SESION: 
            return {
                ...state,
                fetching: true,
            }

        case GET_SESION_SUCCESS: 
            return {
                ...state,
                fetching: false,
                logged: true,
                user: actions.payload
            }

        case GET_SESION_ERROR: 
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }

        case LOAD_FIREBASE:
            return {
                ...state,
                fetching: true
            }

        case LOAD_FIREBASE_ERROR:
            return {
                ...state,
                fetching: false
            }

        case LOAD_FIREBASE_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: actions.payload
            } 

        case EMAIL_VERIFY: 
            return {
                ...state,
                fetching: true
            }

        case EMAIL_VERIFY_SUCCESS: 
            return {
                ...state,
                fetching: false,
                ok: actions.payload
            }

        case EMAIL_VERIFY_ERROR: 
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }
        
        case RESET_PASSWORD: 
            return {
                ...state,
                fetching: true
            }

        case RESET_PASSWORD_SUCCESS: 
            return {
                ...state,
                fetching: false,
                ok: actions.payload
            }

        case RESET_PASSWORD_ERROR: 
            return {
                ...state,
                fetching: false,
                error: actions.payload
            }   
        
        case SIGN_IN_GOOGLE: 
            return{
                ...state,
                fetching: true
            }

        case SIGN_IN_GOOGLE_SUCCESS: 
            return{
                ...state,
                fetching: false,
                logged: true
            }

        case SIGN_IN_GOOGLE_ERROR: 
            return{
                ...state,
                fetching: false,
                error: actions.payload
            }


        
        default: 
            return{
                ...state
            }    
    }
}