import React from 'react'
import classes from './Header.module.scss';

const Header = ({children}) => {
    return (
        <header>
        <span className={classes.headerText}>{children}</span>
    </header>
    )
}

export default Header
