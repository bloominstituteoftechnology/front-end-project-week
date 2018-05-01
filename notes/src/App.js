import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import CreateNewView from './components/CreateNewView';
import NoteView from './components/NoteView';
import EditView from './components/EditView';
import SigninView from './components/SigninView';
import RegistrationView from './components/RegistrationView';

class App extends Component {
  render() {
    return (
      <div className="myBox">
        <SideBar />
        <Route exact path="/" component={ListView} />
        <Route path="/createnewview" component={CreateNewView} />
        <Route path="/noteview" component={NoteView} />
        <Route path="/editview" component={EditView} />
        <Route path="/signinview" component={SigninView} />
        <Route path="/registrationview" component={RegistrationView} />
      </div>
    );
  }
}

export default App;

// Route set up for components

// styling example used in style property ex: style={{ display: "flex" }}
