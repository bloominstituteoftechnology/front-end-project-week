import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Link } from "react-router-dom";
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
          </div>
        ) : (
          <Route exact path="/" render={() => <div><Link to="/login">Login</Link></div>}/>
        )}
        <div>
          <Route exact path="/" component={NotesList}/>
          <Route path="/addnote" component={AddNote}/>
          <Route path="/note/:id" component={Note}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps)(App));
