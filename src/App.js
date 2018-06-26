import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note, Login, Register } from "./components";
import { connect } from "react-redux";

class App extends Component {

  signoutHandler = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        {localStorage.getItem('jwt') ? (
          <div>
            <Navigation />
            <button onClick={this.signoutHandler}>Sign Out</button>
            <Switch>
              <Route exact path="/" component={NotesList}/>
              <Route path="/addnote" component={AddNote}/>
              <Route path="/:id" component={Note}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
            </Switch>
          </div>
        ) : (
          <Route exact path="/" render={() => <div><Link to="/login">Login</Link></div>}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps)(App));
