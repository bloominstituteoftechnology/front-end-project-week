import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import { BrowserRouter } from 'react-router-dom'

import { notes } from './reducers'
import App from './App'
import './index.css'

const store = createStore(
  combineReducers({ notes, form }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
