import {authAPI, loginAPI} from "../api/api";


const SETUSERSTATE = "set_user_auth_state";
const TOGGLELOGINLOADING = "toggle_is_loading_login";
const SIGN_ME_IN = "signing_in";
const LOGIN_FAILED = "log_fail";

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    },
    isFetching: false,
    login_failed: null
}


let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETUSERSTATE: {

            return {
                ...state,
                data: {...action.payload},
                login_failed: action.login_failed
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
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth, login_failed) => ({
    type: SETUSERSTATE,
    payload: {userId, email, login, isAuth, login_failed}
});
export const toggleIsLoadingLogin = (isFetching) => ({type: TOGGLELOGINLOADING, isFetching});
const toggle_failed_login = (login_failed) => ({type: LOGIN_FAILED, login_failed});

export const singInProcessCheck = () => {
    return async (dispatch) => {
        dispatch(toggleIsLoadingLogin(true));

        let response = await authAPI.getLoginData()
        dispatch(toggleIsLoadingLogin(false));
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true, false));
        } else console.log("error no login")
    }

};

export const singInLogin = (values) => {
    return async (dispatch) => {

        if (!values.remember_me) {
            values = {...values, remember_me: false};
        }
        let response = await loginAPI.signInData(values)
        if (response.data.resultCode === 0) {
            // dispatch(setLogin(response.data.userId));
            dispatch(singInProcessCheck());
        } else {
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
            alert("No sign out");
            console.log("no sign out")
        }
    }
};

export default authReducer; 