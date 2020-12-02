import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message = {p.message}
                                                   likes = {p.likesCount}
                                                   id = {p.id} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className = {classes.profile}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = {onPostChange}
                              ref = {newPostElement}
                              value = {props.newPostText} />
                </div>
                <button onClick = {addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;