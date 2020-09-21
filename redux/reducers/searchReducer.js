import { SEARCH_MOVIES } from '../actions/actions.js';

const initialState = {}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            return { ...state, ...action.payload };
 
        default:
            return state;
    }
};

export default searchReducer;