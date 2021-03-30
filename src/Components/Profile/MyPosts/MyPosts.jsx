import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {


    let postsElements = [...props.posts].reverse().map(p => <Post key = {p.id}
                                                                  message = {p.message}
                                                                  likes = {p.likesCount}
                                                                  id = {p.id} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    console.log('RENDER');

    return (
        <div className = {classes.profile}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit = {onAddPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
};

const maxLength100 = maxLengthCreator(100);

const AddNewPostForm = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
            <Field validate = {[required, maxLength100]}
                   component = {Textarea}
                   placeholder = 'Enter your post'
                   name = 'newPostText' />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;