import React, { Component } from "react";
import SideBar from "./components/layout/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Notes from "./components/notes/Notes";

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
            <Switch>
              <Route exact path="/" component={Notes} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
