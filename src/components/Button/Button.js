import React from 'react'
import classes from './Button.module.scss';

const Button = ({clickHandler, children, filter, type}) => {
    return (
        <button className={classes.button} onClick={() => clickHandler(filter, type)}>{children}</button>
    )
}

export default Button
