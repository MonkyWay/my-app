import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img className={classes.background}
                    src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
                    alt="background"/>
            </div>*/}
            <div>
                <img src = {props.profile.photos.large} />
                <ProfileStatus status={"Hello, dear"} />
            </div>
        </div>
    )

}

export default ProfileInfo;