import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddNote from './components/AddNote';
import Note from './containers/Note';
import EditNote from './components/EditNote';
import DeleteModal from './components/DeleteModal';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/notes" component={App} />
                <Route path="/add" component={AddNote} />  
                <Route path="/notes/:id" render={props=> <Note {...props} />}  />
                <Route path="/edit" render={(props)=> <EditNote {...props} /> }/>
                <Route path="/delete" render={(props)=> <DeleteModal {...props} />} />
            </Switch>
        </Router>
    </Provider> 
, document.getElementById('root'));
 
 
