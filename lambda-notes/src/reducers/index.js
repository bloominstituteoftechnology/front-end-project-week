import { combineReducers } from 'redux'
import { notesReducer } from './notesReducer'
import { apiReducer } from './apiReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  api: apiReducer
})

export default rootReducer
