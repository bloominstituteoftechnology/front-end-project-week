import React, { Component } from "react";
import "./App.css";
import Sidebar from "./containers/Note/Sidebar";
import { Switch, Route } from "react-router-dom";
import LoginPage from './containers/Auth/Login'
import NoteList from "./containers/Note/NoteList";
import NotePage from "./containers/Note/NotePage";
import NoteForm from "./containers/Note/NoteForm";
import EditNote from "./containers/Note/NoteEdit";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Home from "./containers/Auth/Home";

function onAuthRequired({ history }) {
  history.push('/login')
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <Sidebar />

        <Switch>
          <Security
            issuer='https://dev-106394.okta.com/oauth2/default'
            client_id='0oab6y992hZoZmVyi356'
            redirect_uri={window.location.origin + '/implicit/callback'}

            onAuthRequired={onAuthRequired} >
            <Route exact path='/' component={Home} />
          <SecureRoute exact path="/note" render={props => <NoteList {...props} />} />
            <Route exact path="/login" render={ ()=> <LoginPage baseUrl='https://dev-106394.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          <SecureRoute
            exact
            path="/note/:id"
            render={props => <NotePage {...props} />}
          />
          <SecureRoute path="/create" render={props => <NoteForm {...props} />} />
          <SecureRoute
            path="/note/:id/edit"
            render={props => <EditNote {...props} />}
            />
          </Security>
        </Switch>
      </div>
    );
  }
}

export default App;
