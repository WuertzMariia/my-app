import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import {appReducer} from "./appReducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        sidebarPage : sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        appMain: appReducer
    }
)


let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store; 
export default store; 