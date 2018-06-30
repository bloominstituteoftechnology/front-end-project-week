import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { Sidebar, NotesList, AddNote, Note, Landing, NoMatch } from "./components";
import { connect } from "react-redux";
import { loggedIn } from "./actions";

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.props.loggedIn();
      this.props.history.push('/notes');
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.userLoggedIn ? (
          <Sidebar />
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

export default withRouter(connect(mapStateToProps, { loggedIn })(App));
