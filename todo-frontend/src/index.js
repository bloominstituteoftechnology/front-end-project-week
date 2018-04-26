import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { injectGlobal } from 'styled-components'

import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

import { todosReducer } from 'reducers'

const store = createStore(todosReducer, applyMiddleware(thunk, logger))

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
