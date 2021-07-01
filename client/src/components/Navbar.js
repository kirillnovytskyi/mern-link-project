import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

import icon from './data/link.png';

export const Navbar = () => {

    const { logout } = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = event => {
        event.preventDefault();
        logout();
        history.push('/');
    };

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <img src={icon} alt='Icon' style={{width: '30px', paddingTop: '1rem', marginRight: '15px'}}/>
                <span className="brand-logo">Shorten Links</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Exit</a></li>
                </ul>
            </div>
        </nav>
    );
};