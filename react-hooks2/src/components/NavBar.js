import React from 'react';
import {NavLink} from "react-router-dom";

export const navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            github search
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/" exact className='nav-link'>Main</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>Info</NavLink>
            </li>
        </ul>
    </nav>
)

export default navbar;