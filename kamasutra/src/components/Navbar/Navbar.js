import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <ul className={classes.navBar}>
            <li className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/dialogs'}>Dialog</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/profile'}>Profile</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/news'}>News</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/music'}>Music</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink activeClassName={classes.active} to={'/settings'}>Settings</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;