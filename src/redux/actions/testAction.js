import axios from 'axios'

//const url = "https://flutter-firebase.herokuapp.com/"
const dev_url = "http://localhost:3500/user"


export const CREATE_TEST = "CREATE_TEST"
export const CREATE_TEST_SUCCESS = "CREATE_TEST_SUCCESS"
export const CREATE_TEST_ERROR = "CREATE_TEST_ERROR"

export const UPDATE_TEST = "UPDATE_TEST"
export const UPDATE_TEST_SUCCESS = "UPDATE_TEST_SUCCESS"
export const UPDATE_TEST_ERROR = "UPDATE_TEST_ERROR"

export const DELETE_TEST = "DELETE_TEST"
export const DELETE_TEST_SUCCESS = "DELETE_TEST_SUCCESS"
export const DELETE_TEST_ERROR = "DELETE_TEST_ERROR"

export const GET_ALL_TEST = "GET_ALL_TEST"
export const GET_ALL_TEST_SUCCESS = "GET_ALL_TEST_SUCCESS"
export const GET_ALL_TEST_ERROR = "GET_ALL_TEST_ERROR"

export const GET_TEST_BY_USER = "GET_TEST_BY_USER"
export const GET_TEST_BY_USER_SUCCESS = "GET_TEST_BY_USER_SUCCESS"
export const GET_TEST_BY_USER_ERROR = "GET_TEST_BY_USER_ERROR"

export const GET_ONE_TEST = "GET_ONE_TEST"
export const GET_ONE_TEST_SUCCESS = "GET_ONE_TEST_SUCCESS"
export const GET_ONE_TEST_ERROR = "GET_ONE_TEST_ERROR"

export const GET_TEST_BY_CATEGORY = "GET_TEST_BY_CATEGORY" 
export const GET_TEST_BY_CATEGORY_SUCCESS = "GET_TEST_BY_CATEGORY_SUCCESS" 
export const GET_TEST_BY_CATEGORY_ERROR = "GET_TEST_BY_CATEGORY_ERROR" 

export const HANDLE_LIKES = "HANDLE_LIKES"
export const HANDLE_LIKES_SUCCESS = "HANDLE_LIKES_SUCCESS"
export const HANDLE_LIKES_ERROR = "HANDLE_LIKES_ERROR"

export const createTestAction = ({test, uid}) => (dispatch, getState) => {
    dispatch({
        type: CREATE_TEST
    })
    return axios.post(dev_url, test, {
        headers: {
            'fb-id': uid
        }
    })
    .then(res => {
        dispatch({
            type: CREATE_TEST_SUCCESS,
            payload: res.data.data
        })
    })
    .catch(err => {
        console.error(err);
        dispatch({
            type: CREATE_TEST_ERROR,
            payload: err
        })
    })
}

export const updateTestAction = () => (dispatch, getState) => {
    dispatch({
        type: UPDATE_TEST
    })
    return axios.post(dev_url)
}

export const deleteTestAction = () => (dispatch, getState) => {

}

export const getAllTestAction = () => (dispatch, getState) => {

}

export const getTestByUserAction = () => (dispatch, getState) => {

}

export const getOneTestAction = () => (dispatch, getState) => {

}

export const getTestByCategoryAction = () => (dispatch, getState) => {

}

export const handleLikesAction = () => (dispatch, getState) => {

}