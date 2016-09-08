import * as types from '../constants/ActionTypes'

export default function reducer(state={
    data: {},
    fetching: false,
    fetched: false,
    dialogClosed: true,
    error: null,
  }, action) {
    switch (action.type) {
      case types.FETCH_STARSHIP_DETAILS_REJECTED: {
        return {
          ...state,
          fetching: false,
          dialogClosed: true,
          error: action.payload
        }
      }
      case types.FETCH_STARSHIP_DETAILS_SUCCESS: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          dialogClosed: false,
          data: action.payload,
        }
      }
      case types.FETCH_STARSHIP_DETAILS_STARTED: {
        return {
          ...state,
          fetching: true,
          fetched: false,
          dialogClosed: true,
          data: {},
        }
      }
      case types.STARSHIP_DETAILS_DIALOG_CLOSED: {
        return {
          ...state,
          fetching: false,
          fetched: false,
          dialogClosed: true,
          data: {},
        }
      }
    }

    return state
}

export function getFetchStatus(state) {
  return {
    fetching: state.starshipDetails.fetching,
    fetched: state.starshipDetails.fetched,
    dialogClosed: state.starshipDetails.dialogClosed,
  }
}
