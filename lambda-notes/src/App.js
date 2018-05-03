import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LeftColumn from './components/LeftColumn';
import ListView from './components/ListView';
import LandingPage from './components/LandingPage';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';
import SignIn from './components/SignIn';
import Users from './components/Users';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';

import RequireAuth from './components/HOC/RequireAuth';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import './App.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/users/signout" component={SignOut} />
            <Route path="/users" component={RequireAuth(Users)} />
            <Route path="/users" component={LeftColumn} />
            <Route exact path="/users/listview" component={ListView} />
            <Route exact path="/users/createnote" component={CreateNote} />
            <Route exact path="/users/noteview/:id" component={NoteView} />
            <Route path="/users/editnote/:id" component={EditNote} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
