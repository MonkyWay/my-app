import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message = {p.message}
                                                   likes = {p.likesCount}
                                                   id = {p.id} />);


    let addPostClick = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className = {classes.profile}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = {onPostChange}
                              value = {props.newPostText}
                              placeholder = 'Enter your post' />
                </div>
                <div>
                    <button onClick = {addPostClick}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;