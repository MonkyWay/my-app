import React from 'react';
import logo from '../img/logo.png';
import classes from './Header.module.css';


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src={logo}
                alt="logo" />
        </header>
    )

}

export default Header;