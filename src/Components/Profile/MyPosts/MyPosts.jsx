import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi! How are you?', likesCount: 120},
        {id: 2, message: 'It\'s my first post.', likesCount: 100500},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount} id={p.id}/>);

    return (
        <div className={classes.profile}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;