import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Link } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note, Login, Register } from "./components";
import { connect } from "react-redux";
import { resetStore } from "./actions";

class App extends Component {


  signoutHandler = () => {
    localStorage.removeItem('jwt');
    this.props.resetStore();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        {localStorage.getItem('jwt') ? (
          <div>
            <Navigation signoutHandler={this.signoutHandler}/>
          </div>
        ) : (
          <Route exact path="/" render={() => <div><Link to="/login">Login</Link></div>}/>
        )}
        <Route exact path="/notes" component={NotesList}/>
        <Route path="/addnote" component={AddNote}/>
        <Route path="/note/:id" component={Note}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps, { resetStore })(App));
