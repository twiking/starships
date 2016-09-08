import { combineReducers } from 'redux'

import starships from './starshipsReducer'
import starshipDetails from './starshipDetailsReducer'

export default combineReducers({
  starships,
  starshipDetails,
})
