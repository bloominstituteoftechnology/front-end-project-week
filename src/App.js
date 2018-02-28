import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

import * as actions from './actions';

import './App.css';
import NoteListPage from "./components/NoteListPage";
import AddNotePage from "./components/AddNotePage";
import EditNotePage from "./components/EditNotePage";
import ViewNotePage from "./components/ViewNotePage";

class App extends Component {

  constructor(props) {
    super(props);
    props.actions.getSmurfData();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <div className="sidenav">
            <h3>Lambda Notes</h3>
            <NavLink to="/">Please View Your Notes</NavLink>
            <NavLink to="/add-note">Create New Note</NavLink>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/" component={NoteListPage}/>
              <Route path="/add-note" component={AddNotePage}/>
              <Route path="/edit-note" component={EditNotePage}/>
              <Route path="/view-note" component={ViewNotePage}/>
              {/*<Route component={NotFoundPage}/>*/}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
