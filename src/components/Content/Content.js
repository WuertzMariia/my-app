import React from "react";
import c from './Content.module.css'
import MyPostsContainer from "./MyPosts/MyPosts_Container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {setProfileData} from "../../redux/profileReducer";

const Content = (props) => {

    
    return <div className={c.profile}>
        <ProfileInfo userId={props.userId} setProfileData={props.setProfileData} savePhoto={props.savePhoto} profile={props.profile} isOwner={props.isOwner} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostsContainer store={props.store}/>
        </div>
}

export default Content;