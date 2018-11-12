import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger";
import App from './App';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';


const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <Route path='/' component={App} /> */}
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
)


