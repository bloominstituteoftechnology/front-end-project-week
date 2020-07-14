// import Markdown from 'markdown-to-jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancers(applyMiddleware(logger, thunk))
const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
