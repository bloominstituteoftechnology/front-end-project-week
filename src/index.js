import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider, combineReducers } from 'react-redux'
import { createStore, compose } from 'redux'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>, 
  document.getElementById('root')
)

registerServiceWorker()
