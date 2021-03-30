import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    return (
        <div>
            <ProfileInfo savePhoto = {savePhoto}
                         isOwner = {isOwner}
                         profile = {profile}
                         saveProfile={saveProfile}
                         status = {status}
                         updateStatus = {updateStatus} />
            <MyPostsContainer />
        </div>
    )

}

export default Profile;
