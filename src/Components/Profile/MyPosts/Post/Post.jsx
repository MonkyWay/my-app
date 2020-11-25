import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
    <div className={classes.item}>
        {props.message}
        <br/>
        <span>{props.likes} Like</span>
    </div>
    )

}

export default Post;