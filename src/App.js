import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

import './App.css';
import NoteListPage from "./components/NoteListPage";
import AddNotePage from "./components/AddNotePage";
import EditNotePage from "./components/EditNotePage";
import ViewNotePage from "./components/ViewNotePage";

class App extends Component {

  /*constructor(props) {
    super(props);
    // props.actions.getSmurfData();
  }*/

  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <div className="sidenav">
            <h3>Lambda Notes</h3>
            <NavLink to="/">View Your Notes</NavLink>
            <NavLink to="/add-note">Create New Note</NavLink>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/" component={NoteListPage}/>
              <Route path="/add-note" component={AddNotePage}/>
              <Route path="/edit-note/:id" component={EditNotePage}/>
              <Route path="/view-note/:id" component={ViewNotePage}/>
              {/*<Route component={NotFoundPage}/>*/}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
