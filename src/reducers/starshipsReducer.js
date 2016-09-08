import * as types from '../constants/ActionTypes'

export default function reducer(state={
    starships: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case types.FETCH_STARSHIPS_REJECTED: {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
      case types.FETCH_STARSHIPS_SUCCESS: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          starships: action.payload.results,
        }
      }
    }

    return state
}

export function getStarshipDetails(state) {
  return state.starshipDetails.data
}
