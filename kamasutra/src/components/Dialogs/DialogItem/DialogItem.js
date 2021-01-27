import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={classes.dialogsUserItem}>
            <NavLink to={'/dialog/' + props.id}>
                {props.name}
            </NavLink>
        </li>
    )
}


export default DialogItem;