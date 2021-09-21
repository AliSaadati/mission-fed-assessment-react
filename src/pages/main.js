import React from 'react'
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Switch from '../components/Switch/Switch';
import Image from '../components/Image/Image';
import Footer from '../components/Footer/Footer';
import classes from './main.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { fetchImage, toggleFilter } from '../actions/imageActions'

const Main = () => {

    // get monochrome state from global state
    const monoChrome = useSelector(state => state.image.filter);

    const imageUrl = useSelector(state => state.image.imageUrl)
    const dispatch = useDispatch();

    const getImageClickHandler = (imageFilter, imageType) => {
        dispatch(fetchImage(imageFilter, imageType))
    }

    const toggleFilterHandler = () => {
        dispatch(toggleFilter());
    }
    return (
        <>
            <Header>Cat pics to make you smile</Header>
            <main>
                <div className={classes.inputFlexContainer}>
                    <div className={classes.buttonFlexContainer}>
                        <Button
                            filter={monoChrome}
                            type={'sm'}
                            clickHandler={getImageClickHandler}>Small Cat Image</Button>
                        <Button
                            filter={monoChrome}
                            type={'md'}
                            clickHandler={getImageClickHandler}>Medium Cat Image</Button>
                        <Button
                            filter={monoChrome}
                            type={'sq'}
                            clickHandler={getImageClickHandler}>Square Cat Image</Button>
                    </div>

                    <div className={classes.switchFlexContainer}>
                        <span className={classes.switchLabelText}>Toggle for monochromatic images</span>
                        <Switch toggleFilter={toggleFilterHandler}></Switch>
                    </div>
                </div>
                <Image src={imageUrl} alt="Cat Image"></Image>
            </main>
            <Footer>Powered by <a href="https://cataas.com/#/">Cataas API</a> - 2021</Footer>
        </>
    )
}

export default Main
