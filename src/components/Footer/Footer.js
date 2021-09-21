import React from 'react'
import classes from './Footer.module.scss';

const Footer = ({children}) => {
    return (
        <footer>
            <span className={classes.footerText}>{children}</span>
        </footer>
    )
}

export default Footer
