
import axios from "axios"

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS, GET_USER, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS } from "./auth.types"

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL
const authBaseRoute = process.env.REACT_APP_USER_AUTH_URL

export const LoginApi = (creds) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_IN_LOADING })
    try {
        let res = await axios.post(`${baseUrl}${authBaseRoute}/login`, creds)
        dispatch({
            type: AUTH_SIGN_IN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({ type: AUTH_SIGN_IN_ERROR })
    }
}


export const SignupApi = (creds) => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_UP_LOADING })
    try {
        let res = await axios.post(`${baseUrl}${authBaseRoute}/register`, creds)
        dispatch({
            type: AUTH_SIGN_UP_SUCCESS,
            payload: res.data
        })
    } catch (error) {

        dispatch({ type: AUTH_SIGN_UP_ERROR })
    }
}

export const LogOut = () => async (dispatch) => {
    dispatch({ type: AUTH_SIGN_OUT })
}


export const getUser = () => async (dispatch) => {
    try {
        let res = await axios.get(`${baseUrl}${authBaseRoute}/getuser`, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: GET_USER, payload: res.data })
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = (body) => async (dispatch) => {
    try {
        let res = await axios.patch(`${baseUrl}${authBaseRoute}/update-profile`, body, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        // dispatch({ type: UPDATE_PROFILE });
        dispatch(getUser());
    } catch (error) {
        console.log(error);
    }
}
export const updateProfilePicture = (formData) => async (dispatch) => {
    try {
        let res = await axios.post(`${baseUrl}${authBaseRoute}/update-avatar`, formData, {
            headers: {
                token: localStorage.getItem('checkmycalorieToken')
            }
        })
        dispatch({ type: UPDATE_PROFILE_SUCCESS });
        dispatch(getUser());
    } catch (error) {
        dispatch({ type: UPDATE_PROFILE_ERROR });
        console.log(error);
    }
}