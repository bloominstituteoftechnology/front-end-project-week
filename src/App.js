import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note, Landing, NoMatch } from "./components";
import { connect } from "react-redux";
import { resetStore, loggedIn } from "./actions";

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.props.loggedIn();
      this.props.history.push('/notes');
    }
  }

  signoutHandler = () => {
    localStorage.removeItem('jwt');
    this.props.resetStore();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        {this.props.userLoggedIn ? (
          <Navigation signoutHandler={this.signoutHandler}/>
        ) : (null)}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/notes" component={NotesList}/>
          <Route path="/addnote" component={AddNote}/>
          <Route path="/note/:id" component={Note}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps, { resetStore, loggedIn })(App));
