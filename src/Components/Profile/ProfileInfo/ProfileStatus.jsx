import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input type = "text" value={props.status} />
            </div>
        </div>
    )

}

export default ProfileStatus;