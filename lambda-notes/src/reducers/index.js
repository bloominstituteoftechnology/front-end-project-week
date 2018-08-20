import { combineReducers } from 'redux'
import { notesReducer, singleReducer } from './notesReducer'
import { apiReducer } from './apiReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  notes: notesReducer,
  note: singleReducer,
  form: formReducer,
  api: apiReducer
})

export default rootReducer
