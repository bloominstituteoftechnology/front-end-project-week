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
import Signup from "./components/Login/Signup.js";

class PostApp extends Component {
  componentDidMount() {
    this.props.fetchNotes(`${process.env.REACT_APP_API}/notes/`);
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
        <Route exact path="/note/:id" component={ViewNote} />
        <Route path="/edit" component={EditNote} />
        <Route path="/register" component={Signup} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchNotes }
  )(PostApp)
);
