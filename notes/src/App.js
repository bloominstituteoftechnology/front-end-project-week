import React, { Component } from "react";
import Notes from "./components/Notes";
import Menu from "./components/Menu";
import { Route, withRouter } from "react-router-dom";
import Create from "./components/Create";
import "./App.css";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";
import { fetchNotes } from "./actions/action";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes(
      "https://killer-notes.herokuapp.com/note/get/all"
    );
  }

  render() {
    return (
      <div className="container">
        <React.Fragment>
          <Menu />
        </React.Fragment>
        <React.Fragment>
          <Route exact path="/" component={Notes} />
        </React.Fragment>
        <Route exact path="/create" component={Create} />
        <Route
          exact
          path="/note/:id"
          component={ViewNote}
        />
        <Route path="/edit" component={EditNote} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchNotes }
  )(App)
);
