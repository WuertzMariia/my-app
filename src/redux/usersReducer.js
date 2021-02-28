import { usersApi } from "../api/api";

const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const SETUSERS = "set_users";
const SETCURRENTPAGE = "set_current_page";
const SETTOTALPAGESCOUNT = "setTotalUsersCount";
const TOGGLEISLOADING = "toggle_is_loading";
const SUBSCRIPTIONPROCESSED = "while_subscription_is_being_processed";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0, //before axios.get
    currentPage: 1,
    isLoading: false,
    subscriptionProcessed: []
}


let usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            {  
                return  {
                    ...state,
                    users: state.users.map(u => {
                       
                        if (u.id=== action.userId) {
                           
                            return { ...u, followed: true }
                        }
                        
                        return u;
                    })
                }

               
            };
        case UNFOLLOW:
            {
                return  {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u;
                    })
                }

              
            };
        case SETCURRENTPAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SETUSERS:

            return {
                ...state,
                users: action.users
            };
        case SETTOTALPAGESCOUNT:

            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLEISLOADING:
            return {
                ...state,
                isLoading: action.isloading
            };
        case SUBSCRIPTIONPROCESSED: {

            return {
                ...state,
                subscriptionProcessed: action.being_processed ?
                    [...state.subscriptionProcessed, action.id] :
                    [...state.subscriptionProcessed.filter(id => id !== action.id)]
            }
        }

        default: return state;
    }

}

export const follow = (userId) => {
    return ({ type: FOLLOW, userId }) };
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SETUSERS, users });
export const toggleIsLoading = (isloading) => ({ type: TOGGLEISLOADING, isloading });
export const subscriptionIsBeingProcessed = (being_processed, id) => ({ type: SUBSCRIPTIONPROCESSED, being_processed, id });

export const setCurrentPageUsers = (currentPage) => ({ type: SETCURRENTPAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SETTOTALPAGESCOUNT, totalUsersCount });



export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
        
        usersApi.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setCurrentPageUsers(currentPage));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const unsubscribe = (userID) => {

    return (dispatch) => {
 
    dispatch(subscriptionIsBeingProcessed(true, userID));
    usersApi.deleteSubscription(userID).then((resultCode) => {
        if (resultCode === 0) {
            
            dispatch(unfollow(userID));
        }
       
        dispatch(subscriptionIsBeingProcessed(false, userID));
    });
}}

export const subscribe = (userID) => {

    return (dispatch) => {
 
    dispatch(subscriptionIsBeingProcessed(true, userID));
    usersApi.getSubscription(userID).then((resultCode) => {
        if (resultCode === 0) {
      
            dispatch(follow(userID));
        }
    });  
    dispatch(subscriptionIsBeingProcessed(false, userID));
}}

export default usersReducer; 