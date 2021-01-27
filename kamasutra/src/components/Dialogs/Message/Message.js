import React from 'react';
import classes from './../Dialogs.module.css';
import img from './../../../media/ava.png'

const Message = (props) => {
    return (
        <div className={classes.dialogItem + ' clearfix'}>
            <div className={classes.dialogItemLeft}>
                <img className={classes.dialogAvatar} src={props.avatar} alt={'img'} />
                <div className={classes.dialogItemUserName}>{props.userName}</div>
            </div>
            <div className={classes.dialogItemRight}>
                <div className={classes.dialogItemText}>
                    {props.userText}
                </div>
            </div>
        </div>
    )
}


export default Message;