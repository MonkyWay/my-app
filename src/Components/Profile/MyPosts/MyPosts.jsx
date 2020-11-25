import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} id={p.id}/>);

    return (
        <div className={classes.profile}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Type your new post here'>

                    </textarea></div>
                <button>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;