import React, { Component } from "react";

// Auxillary Packages
import { connect } from "react-redux";
import { updateNote } from "./actions";
import { withRouter } from "react-router-dom";

// Purgatorial Packages
import { Route } from "react-router-dom";

// Components
import ListView from "./components/ListView";
import ActionPanel from "./components/ActionPanel";
import NewNoteForm from "./components/NewNoteForm";
import GotOne from "./components/GotOne";
import EditNoteForm from "./components/EditNoteForm";
import Register from "./components/Register";
import Login from "./components/Login";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
      <div>
        <h4>Welcome, {this.props.user.username}</h4>
      </div>
        <div
          className="row m-3"
          style={
            this.props.notes.length < 1
              ? { height: "100%" }
              : { height: "100vh" }
          }
        >
          <div className="col-md-3 p-5 border-left action-container left-side">
            {localStorage.getItem("isLoggedIn") === "true" ? (
              <Route path="/" render={(props) => <ActionPanel {...props} />} />
             ) : null}
          </div>
          <div className={`col-md-9 p-5 border right-side`}>
            {localStorage.getItem("isLoggedIn") === "true" ? (
              <React.Fragment>
                <Route exact path="/" component={ListView} />
                <Route exact path="/newNote" component={NewNoteForm} />
                <Route exact path="/:title/:id" component={GotOne} />
                <Route
                  exact
                  path="/editForm/:title/:id"
                  render={(props) => (
                    <EditNoteForm updateNote={this.props.updateNote} {...props} />
                  )}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Route exact path="/" component={Register} />
                <Route exact path="/login" component={Login} />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    updated: state.updated,
    isFetching: state.isFetching,
    notes: state.notes,
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    error: state.error,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateNote }
  )(App)
);
