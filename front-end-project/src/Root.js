import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.js'


const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
        <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
)

export default Root