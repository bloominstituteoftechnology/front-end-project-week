import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById('root')
)
