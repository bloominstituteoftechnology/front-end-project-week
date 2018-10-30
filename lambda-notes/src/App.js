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
            <MobileNav />
            <Switch>
              <Route exact path="/" component={Notes} />
              <Route exact path="/add" component={AddNote} />
              <Route exact path="/notes/:id" component={SingleNote} />
              <Route exact path="/notes/:id/edit" component={EditNote} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
