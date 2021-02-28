import React from "react";
import c from './Content.module.css'
import MyPostsContainer from "./MyPosts/MyPosts_Container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {

    
    return <div className={c.profile}>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostsContainer store={props.store}/>
        </div>
}

export default Content;