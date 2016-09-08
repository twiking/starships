import axios from 'axios';
import * as types from '../constants/ActionTypes'

export function fetchStarshipDetails(url) {
  return function(dispatch) {
    dispatch({ type: types.FETCH_STARSHIP_DETAILS_STARTED })
    axios.get(url)
      .then((response) => {
        dispatch({
          type: types.FETCH_STARSHIP_DETAILS_SUCCESS,
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_STARSHIP_DETAILS_REJECTED,
          payload: error
        })
      })
  }
}

export function setDialogClosed() {
  return function(dispatch) {
    dispatch({ type: types.STARSHIP_DETAILS_DIALOG_CLOSED })
  }
}
