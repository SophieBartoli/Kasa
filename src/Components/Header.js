import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Logo/Logo.webp';

const Header = () => {
    return (
        <div className='headerDiv'>
            <img src={ logo } alt="Logo"/>

            <nav className='headerNav'>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "headerLink active" : "headerLink")}
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/Apropos"
                    className={({ isActive }) => (isActive ? "headerLink active" : "headerLink")}
                >
                    A propos
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;