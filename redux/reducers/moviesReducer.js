import {FETCH_TRENDING} from '../actions/actions.js';

const initialState ={

}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRENDING:
            return {...state,...action.payload};
        // case DECREMENT_COUNTER:
        //     return {...state, value: state.value - 1};
        default:
            return state;
    }
};

export default moviesReducer;