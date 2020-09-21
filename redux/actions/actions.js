import Axios from "axios";

export const FETCH_TRENDING = "FETCH_TRENDING";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
import axios from 'axios'
// export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


//Action Creator
export const fetchTrending = (h) => async dispatch => {
    console.log()
    const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=39eb97eb1e0b7d12c2520bfaf274624f")
    console.log(res.data)
    dispatch({
        type: FETCH_TRENDING,
        payload: res.data
    })
}

export const searchMovies = (searchInput) => async dispatch => {
    if (searchInput) {
        const res = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=39eb97eb1e0b7d12c2520bfaf274624f&language=en-US&query=" + searchInput + "&page=1&include_adult=false")
        console.log(res)
        dispatch({
            type: SEARCH_MOVIES,
            payload: res.data
        })
    }
}