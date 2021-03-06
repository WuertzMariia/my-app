import React from "react";
import c from './Post.module.css'

const Post = (props) => {
    return <div className={c.postitem}>
        <img src="https://static.thenounproject.com/png/31505-200.png"></img>
            <div className={c.post}>
                {props.message}
            </div>
        <span>Like</span>
    </div>
}

export default Post;