import {usersApi, profileAPI} from "../api/api";
import React from "react";

const post_textarea_changed = "post_textarea_changed";
const add_post = "add_post";
const SET_USER_PROFILE = "setUserProfile";
const TOGGLE_LOADING = "page_is_loading";
const UPDATE_USER_STATUS = "user_status_update";
const SET_USER_STATUS = "set_user_status"
const DELETE_POST = "delete_post";
const SET_PROFILE_PHOTO = "set_new_profile_photo";
const SET_PROFILE_DATA = "set_full_profile_data";
let initialState = {

    posts: [
        {post: "Hello", id: 1},
        {post: "how are you", id: 2},
        {post: "i am fine", id: 3},
        {post: "i am fine", id: 4},
        {post: "i am fine", id: 5}
    ],
    profile: null,
    isFetching: false,
    status: 'My dream is to become a good Frontend Developer'
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case add_post : {

            return {
                ...state,
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
        case SET_PROFILE_PHOTO: {
            debugger;
            return {
                ...state,
                profile: {...state.profile, photos: action.file}

            }
        }
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

export const actioncreatorAddPost = (new_post) => ({type: add_post, new_post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading});
export const deletePost = (id) => ({type: DELETE_POST, id});
const updatingUserStatus = (status) => ({type: UPDATE_USER_STATUS, status});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
const savePhotoSuccess = (file) => ({type: SET_PROFILE_PHOTO, file})
const setProfileDataSuccess = (data) => ({type: SET_PROFILE_DATA, data});
export const getCurrentUserStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(response));

    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsLoading(true));
        const response = await usersApi.getUserProfile(userId)
debugger;
        dispatch(toggleIsLoading(false));
        dispatch(setUserProfile(response));

    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateUserStatus(status)
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

export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }
}

export const setProfileData = (values) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.data.userId;
        const response = await profileAPI.setProfData(values);
        debugger;
        if (response.data.resultCode === 0) {

            dispatch(getUserProfile(userId));
        }
    }
}

export default profileReducer; 