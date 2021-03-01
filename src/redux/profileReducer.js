import {usersApi, profileAPI} from "../api/api";

const post_textarea_changed = "post_textarea_changed";
const add_post = "add_post";
const SET_USER_PROFILE = "setUserProfile";
const TOGGLE_LOADING = "page_is_loading";
const UPDATE_USER_STATUS = "user_status_update";
const SET_USER_STATUS = "set_user_status"
const DELETE_POST = "delete_post";
let initialState = {

    posts: [
        {post: "Hello", id: 1},
        {post: "how are you", id: 2},
        {post: "i am fine", id: 3},
        {post: "i am fine", id: 4},
        {post: "i am fine", id: 5}
    ],
    // newposttext:"",
    profile: null,
    isFetching: false,
    status: 'My dream is to become a good Frontend Developer'
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case post_textarea_changed: {
            return {
                ...state,
                newposttext : action.newPostData
            }
        };*/
        case add_post : {

//  let newmessbode = state.newposttext; 
            return {
                ...state,
                // newposttext: "",
                posts: [...state.posts, {post: action.new_post, id: 6}]
            }
        }
            ;
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(item => {
                    return item.id != action.id
                })]
            }
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
            ;
        case TOGGLE_LOADING: {
            return {
                ...state,
                isFetching: action.isLoading,
            }
        }
            ;
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
            ;
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

// export const actioncreatorPostTextareaChanged = (new_value) => ({ type: post_textarea_changed, newPostData: new_value });
export const actioncreatorAddPost = (new_post) => ({type: add_post, new_post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading});
export const deletePost = (id) => ({type: DELETE_POST, id});
const updatingUserStatus = (status) => ({type: UPDATE_USER_STATUS, status});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getCurrentUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(response));

    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsLoading(true));
        let response = await usersApi.getUserProfile(userId)

        dispatch(toggleIsLoading(false));
        dispatch(setUserProfile(response));

    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateUserStatus(status)
        if (response.resultCode === 0) {
            dispatch(updatingUserStatus(status));
        }
    }
}


export const addNewPost = (values) => {
    return (dispatch) => {
        dispatch(actioncreatorAddPost(values));
    }
}

export default profileReducer; 