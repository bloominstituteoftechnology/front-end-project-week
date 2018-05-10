import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { notesReducer } from './reducers'
import { reducer as formReducer } from 'redux-form'

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [logger, thunk, routerMiddleware(history)]

const reducer = combineReducers({
  notesReducer,
  form: formReducer,
  router: routerReducer
})

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)