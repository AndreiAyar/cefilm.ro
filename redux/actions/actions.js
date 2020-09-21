import Axios from "axios";
import API_KEY from '../../api_key.js'
export const FETCH_TRENDING = "FETCH_TRENDING";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
import axios from 'axios'

 
//Action Creator
export const fetchTrending = (h) => async dispatch => {
    console.log()
    const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    console.log(res.data)
    dispatch({
        type: FETCH_TRENDING,
        payload: res.data
    })
}

export const searchMovies = (searchInput) => async dispatch => {
    if (searchInput) {

        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}&page=1&include_adult=false`)
        console.log(res)
        dispatch({
            type: SEARCH_MOVIES,
            payload: res.data
        })
    }
}