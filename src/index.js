import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App } from './components'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(rootReducer)

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
)

registerServiceWorker()
