import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducer from './Reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";


const store = createStore(reducer)

render(
    <Provider store={store}>
        <Router>
        <App />
        </Router>
    </Provider>, document.getElementById('root'));
