import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NoteList from './components/NoteList';
import Note from './components/Note';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const store = createStore(Reducer, applyMiddleware(logger, thunk)
);

const sNote = ({ match }) => {
  return <h3>Single Note</h3>;
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className='front'>
        <Route path='/' component={App} />
        <Route exact path='/' component={NoteList} />        
        <Route exact path = '/note/:id' component={Note}></Route>
        <Route exact path = '/edit' component = {EditNote}></Route>        
        <Route exact path = '/create' component={CreateNote}></Route>
      </div>
    </Router>  
  </Provider>,
  document.getElementById('root')
);