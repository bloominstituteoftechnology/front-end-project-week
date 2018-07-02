import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { Sidebar, Menu, NotesList, AddNote, Note, Landing, Account, NoMatch, Deleted } from "./components";
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
    const { userLoggedIn } = this.props;
    return (
      <div className="App">
        {userLoggedIn ? (
            <Sidebar />
        ) : (null)}
        <div className="app-main">
        {userLoggedIn ? (
            <Menu />
        ) : (null)}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/notes" component={NotesList}/>
          <Route path="/addnote" component={AddNote}/>
          <Route path="/note/:id" component={Note}/>
          <Route path="/account" component={Account}/>
          <Route path="/deleted" component={Deleted}/>
          <Route component={NoMatch}/>
        </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps, { loggedIn })(App));
