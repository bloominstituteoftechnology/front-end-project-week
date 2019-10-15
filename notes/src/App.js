import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";


import SideBar from "./components/Sidebar";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import NotePage from "./components/NotePage";
import EditNote from "./components/EditNote";
import Register from "./components/Register";
import Login from "./components/Login";

import {
  returnUser
} from "./actions/actions";

import "./styles/App.css";


class App extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("jwt")
    return token 
    ? this.props.returnUser(token)
    : null

  }
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" component={Notes} />
        <Route exact path="/my-notes" component={Notes} />
        <Route exact path="/create" component={CreateNote} />
        <Route exact path="/notes/:id" render={props => <NotePage {...props} />} />
        <Route
          exact
          path="/note/:id/edit"
          render={props => <EditNote {...props} />}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    )
  }
  
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};
export default withRouter(connect(
  mapStateToProps,
  { returnUser }
)(App));
