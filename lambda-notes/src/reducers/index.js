import { combineReducers } from 'redux'
import { notesReducer, singleReducer, tagsReducer } from './notesReducer'
import { apiReducer } from './apiReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  note: singleReducer,
  tags: tagsReducer,
  api: apiReducer
})

export default rootReducer
