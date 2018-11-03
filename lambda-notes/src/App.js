import React, { Component } from "react";
import SideBar from "./components/layout/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Notes from "./components/notes/Notes";
import AddNote from "./components/notes/AddNote";
import SingleNote from "./components/notes/SingleNote";
import EditNote from "./components/notes/EditNote";
import Login from "./components/auth/Login";
import MobileNav from "./components/layout/MobileNav";
import Signup from "./components/auth/Signup";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";
import "react-quill/dist/quill.snow.css";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <SideBar />
            <Route path="/" component={MobileNav} />
            <Switch>
              <Route exact path="/" component={UserIsAuthenticated(Notes)} />
              <Route
                exact
                path="/add"
                component={UserIsAuthenticated(AddNote)}
              />
              <Route
                exact
                path="/notes/:id"
                component={UserIsAuthenticated(SingleNote)}
              />
              <Route
                exact
                path="/notes/:id/edit"
                component={UserIsAuthenticated(EditNote)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                exact
                path="/sign-up"
                component={UserIsNotAuthenticated(Signup)}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
