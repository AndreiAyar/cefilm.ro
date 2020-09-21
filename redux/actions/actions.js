import Axios from "axios";

export const FETCH_TRENDING = "FETCH_TRENDING";
import axios from 'axios'
// export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


//Action Creator
export const fetchTrending = () => async dispatch => {
    const res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=39eb97eb1e0b7d12c2520bfaf274624f")
 console.log(res.data)
 dispatch({
        type: FETCH_TRENDING,
        payload:res.data
    })
}

// export const decrementCounter = () => ({
//     type: DECREMENT_COUNTER
// });
