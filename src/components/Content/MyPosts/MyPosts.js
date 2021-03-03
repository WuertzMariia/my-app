import React from "react";
import c from './MyPosts.module.css'
import MyPostsFieldFormContainer from "./MyPostsFieldForm";
import Post from './Post/Post'


const MyPosts = React.memo(props => {
    let postdata = props.profilePage.posts.map(p => <Post message={p.post}/>)
    return <div className={c.content}>
        <div><h3>My Posts</h3></div>
        <MyPostsFieldFormContainer/>
        {postdata}
    </div>
});

export default MyPosts;