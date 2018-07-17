import { combineReducers } from 'redux'
import { notesReducer, singleReducer } from './notesReducer'
import { apiReducer } from './apiReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  note: singleReducer,
  api: apiReducer
})

export default rootReducer
