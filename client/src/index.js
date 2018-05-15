import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import './components/styles/index.css'
import { store } from './store'
import App from './components/App'

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()