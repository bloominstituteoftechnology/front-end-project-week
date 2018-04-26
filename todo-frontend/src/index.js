import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { injectGlobal } from 'styled-components'

import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

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
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
