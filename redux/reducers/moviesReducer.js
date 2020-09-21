import {FETCH_TRENDING} from '../actions/actions.js';

const initialState ={}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRENDING:
            return {...state,...action.payload};
 
        default:
            return state;
    }
};

export default moviesReducer;