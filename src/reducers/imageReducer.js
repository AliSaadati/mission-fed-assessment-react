import {
    FETCH_IMAGE_REQUEST,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAILURE,
    TOGGLE_FILTER
} from '../types/imageTypes';

const initialState = {
    imageUrl: '',
    loading: false,
    error: '',
    filter:false
}

const ImageReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {

        case FETCH_IMAGE_REQUEST:
            
            return {
                ...state,
                loading: true
            
        }

        case FETCH_IMAGE_SUCCESS:
            console.log('here')
            return {
                ...state,
                loading: false,
                imageUrl: payload,
                error: ''
            }

        case FETCH_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                imageUrl: '',
                error: payload
            }

        case TOGGLE_FILTER:
            return {
                ...state,
                filter: !state.filter

            }
        default:
            return state;
    }
}

export default ImageReducer;