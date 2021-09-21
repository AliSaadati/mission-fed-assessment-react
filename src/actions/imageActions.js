import {
    FETCH_IMAGE_REQUEST,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAILURE,
    TOGGLE_FILTER
} from '../types/imageTypes';

const fetchImageRequest = () => {
    return {
        type: FETCH_IMAGE_REQUEST
    };
};

const fetchImageSuccess = imageUrl => {
    return {
        type: FETCH_IMAGE_SUCCESS,
        payload: imageUrl
    };
};

const fetchImageFailure = error => {
    return {
        type: FETCH_IMAGE_FAILURE,
        payload: error
    };
};

export const fetchImage = (imageFilter, imageType) => {
    return async (dispatch) => {

        // base API url
        const baseUrl = 'https://cataas.com/cat?'

        console.log(imageFilter, "image filter")
        console.log(imageType, "image type")
        // API url with parameters appended
        const url = `${baseUrl}${imageFilter === true ? `filter=mono&` : ``}type=${imageType}`

        dispatch(fetchImageRequest());

        // no-store to prevent caching image
        fetch(url, { cache: "no-store" })

            // convert response to image blob to be rendered through image element
            .then(response => response.blob())
            .then(imageBlob => {

                // set global state with image blob url
                const imageObjectURL = URL.createObjectURL(imageBlob);
                dispatch(fetchImageSuccess(imageObjectURL));
            })
            .catch(error => {

                // set global state with failure
                dispatch(fetchImageFailure(error));
            })
    }
}

export const toggleFilter = () => {
    return {
        type: TOGGLE_FILTER
    };}