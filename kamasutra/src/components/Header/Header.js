import React from 'react';
import logo from "../../logo.svg";
import classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes.siteHeader}>
            <img src={logo} className={classes.siteLogo}/>
        </header>
    )
}

export default Header;