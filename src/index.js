import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './state/reducers.js'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
)

registerServiceWorker()
