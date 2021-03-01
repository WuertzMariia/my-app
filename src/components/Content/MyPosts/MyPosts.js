import React from "react";
import c from './MyPosts.module.css'
import MyPostsFieldFormContainer from "./MyPostsFieldForm";
import Post from './Post/Post'


const MyPosts = React.memo(props => {

    // let postareaChange = (e) => {

    //     let new_value = e.target.value; 
    //     props.updatetextarea(new_value);
    // }

    // let addPost = (values) => {
    //   props.updateaddPost(values.new_post);
    // }
    console.log("render");
    let postdata = props.profilePage.posts.map(p => <Post message={p.post}/>)
    return <div className={c.content}>

        <div><h3>My Posts</h3></div>
        <MyPostsFieldFormContainer/>
        {/* <textarea  onChange = {postareaChange} placeholder="Enter your new post here" value={props.profilePage.newposttext}></textarea>

        <div><button onClick={addPost}>Add Post</button>
            <button>Remove</button></div> */}
        {postdata}

    </div>
});

export default MyPosts;