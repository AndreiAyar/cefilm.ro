import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer
});

export default rootReducer;