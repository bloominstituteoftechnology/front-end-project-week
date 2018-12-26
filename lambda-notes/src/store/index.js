import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { notesReducer } from '../reducers/notesReducer'

export default () => {
  const store = createStore(
    combineReducers({
      notesReducer
    }),
    applyMiddleware(logger, thunk)
  )
  return store;
}