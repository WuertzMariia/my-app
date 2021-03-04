import {authAPI, captchaAPI, loginAPI} from "../api/api";


const SETUSERSTATE = "soc_network_auth_set_user_auth_state";
const TOGGLELOGINLOADING = "soc_network_auth_toggle_is_loading_login";
const SIGN_ME_IN = "soc_network_auth_signing_in";
const LOGIN_FAILED = "soc_network_auth_log_fail";
const GET_CAPTCHA_URL_SUCCESS = "soc_network_auth_received_captcha_url";

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    },
    isFetching: false,
    login_failed: null,
    captchaURL: null // if null - captcha not required
}


let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETUSERSTATE: {

            return {
                ...state,
                data: {...action.payload},
                login_failed: action.login_failed,
                captchaURL: action.captchaURL
            }
        }
            ;
        case TOGGLELOGINLOADING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
            ;
        case SIGN_ME_IN: {
            return {
                ...state,
                loginId: action.userId
            }
        }
            ;
        case LOGIN_FAILED : {
            return {
                ...state,
                login_failed: action.login_failed
            }
        }
            ;
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        }
            ;
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth, login_failed, captchaURL) => ({
    type: SETUSERSTATE,
    payload: {userId, email, login, isAuth, login_failed, captchaURL}
});
const toggleIsLoadingLogin = (isFetching) => ({type: TOGGLELOGINLOADING, isFetching});
const toggle_failed_login = (login_failed) => ({type: LOGIN_FAILED, login_failed});
const setCaptchaURL = (captchaURL) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaURL});

// Check if signed in
export const singInProcessCheck = () => {
    return async (dispatch) => {
        dispatch(toggleIsLoadingLogin(true));
        let response = await authAPI.getLoginData()
        dispatch(toggleIsLoadingLogin(false));
        if (response.data.resultCode === 0) {
            let {id, email, login, captchaURL = null} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true, false, captchaURL));
        } else console.log("error no login")
    }

};
// sign me in
export const singInLogin = (values) => {
    return async (dispatch) => {
        if (!values.remember_me) {
            values = {...values, remember_me: false};
        }
        let response = await loginAPI.signInData(values)
        if (response.data.resultCode === 0) {
            dispatch(singInProcessCheck());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaURL());
            }
            dispatch(toggle_failed_login(true));
        }
    }
};

export const singOutLogin = () => {
    return async (dispatch) => {
        let response = await loginAPI.signOutData();
        if (response.data.resultCode === 0) {
            // dispatch(setLogin(response.data.userId)); 
            dispatch(setAuthUserData(null, null, null, false, null));
        } else {
            console.log("no sign out")
        }
    }
};

export const getCaptchaURL = () => {
    return async (dispatch) => {
        const response = await captchaAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(setCaptchaURL(captchaUrl));
    }
}

export default authReducer; 