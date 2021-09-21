import React from 'react';
import classes from './Switch.module.scss';

const Switch = ({toggleFilter}) => {
    return (
        <label className={classes.switch} >
            <input type="checkbox" onClick={toggleFilter}/>
            <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
    )
}

export default Switch
