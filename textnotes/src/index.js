import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './index.css';
import App from './App';
import rootReducer from './Reducer';
import CreateContainer from './Components/CreateContainer';
import SideBar from './Components/SideBar';
import NotesContainer from './Components/NotesContainer';
import Note from './Components/Note';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="container">
                <SideBar />
                <Route exact path="/" component={App}/>
                <Route path="/CreateNote" component={CreateContainer}/>
                <Route path="/Note/:id" component={Note}/>
            </div>
        </Router>
    </Provider>
,document.getElementById('root'));
registerServiceWorker();
