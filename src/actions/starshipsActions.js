import axios from 'axios';
import * as types from '../constants/ActionTypes'

export function fetchStarships() {
  return function(dispatch) {
    axios.get('http://swapi.co/api/starships/')
      .then((response) => {
        dispatch({
          type: types.FETCH_STARSHIPS_SUCCESS,
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_STARSHIPS_REJECTED,
          payload: error
        })
      })
  }
}
