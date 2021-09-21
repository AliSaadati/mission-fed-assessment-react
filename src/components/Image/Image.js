import React from 'react'
import classes from './Image.module.scss';

const Image = ({ src, alt }) => {
    return (
        <>
            {src === '' ? null : <img className={classes.img} src={src} alt={alt} />}
        </>
    )
}

export default Image
