import React from 'react';
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/state";

const Profile = (props) => {

    return (
        <>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage}
                dispatch={props.dispatch}
            />
        </>
    )
}

export default Profile;