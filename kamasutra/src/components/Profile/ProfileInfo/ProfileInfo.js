import React from 'react';
import classes from './Profile.module.css';
import img from './../../../media/ava.png';

const ProfileInfo = () => {

    return (
        <>
            Profile info
            <div>
                <img src={img} alt={''} />
            </div>
            <div className={classes.description}>
                ava + desc
            </div>
        </>
    )
}

export default ProfileInfo;