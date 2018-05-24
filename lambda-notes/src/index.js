import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import AddNoteForm from "./components/AddNoteForm";
import Header from "./components/Header";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/new" component={AddNoteForm} exact />
          </Switch>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
