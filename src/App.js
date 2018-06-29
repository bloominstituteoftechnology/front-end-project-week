import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note, Landing } from "./components";
import { connect } from "react-redux";
import { resetStore } from "./actions";

class App extends Component {


  signoutHandler = () => {
    localStorage.removeItem('jwt');
    this.props.resetStore();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        {localStorage.getItem('jwt') ? (
          <div>
            <Navigation signoutHandler={this.signoutHandler}/>
          </div>
        ) : (
          <Route exact path="/" render={() => 
          <div>
            <Landing />
          </div>}/>
        )}
        <Route exact path="/notes" component={NotesList}/>
        <Route path="/addnote" component={AddNote}/>
        <Route path="/note/:id" component={Note}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps, { resetStore })(App));
