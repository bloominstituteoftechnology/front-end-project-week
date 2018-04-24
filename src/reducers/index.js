import { combineReducers } from 'redux'
import mockData from './mock'

const notesReducer = (state = mockData, { type, payload }) => {
  switch(type) {
    default:
      return state
  }
}

const selectedNoteReducer = (state = mockData[0], { type, payload }) => {
  switch(type) {
    default:
      return state
  }
}

export default combineReducers({
  notes: notesReducer,
  selectedNote: selectedNoteReducer
})