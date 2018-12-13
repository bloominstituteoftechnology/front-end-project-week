import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Sidebar from "./components/Sidebar";
import NoteView from "./components/NoteView";
import Login from "./components/Login";
import Register from "./components/Register";

let API = "https://lambda-notes-sgear.herokuapp.com";
// let API = "http://localhost:9000";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fnotes: [],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  //Gets all notes from database
  fetchNotes = () => {
    const token = localStorage.getItem("jwt");

    const options = {
      headers: {
        Authorization: token
      }
    };
    if (token) {
      axios
        .get(`${API}/notes`, options)
        .then(res => {
          if (res.status === 200 && res.data) {
            this.setState({ isLoggedIn: true, notes: res.data });
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          this.props.history.push("/");
        });
    }
  };

  //Adds new note to API
  addNote = obj => {
    axios
      .post(`${API}/notes`, obj)
      .then(res => {
        this.setState({ notes: res.data.notes });
      })
      .catch(error => console.log(error.message));
  };

  //Edits notes, takes an object as a parameter
  editNote = obj => {
    axios
      .put(`${API}/notes`, obj)
      .then(res => {
        this.setState({ notes: res.data.notes });
        console.log("edited", res);
      })
      .catch(err => console.dir(err.message));
  };

  //Deletes note by id
  deleteNote = id => {
    axios
      .delete(`${API}/notes/${id}`)
      .then(res => {
        this.setState({ notes: res.data.notes });
        console.log("deleted", res);
      })
      .catch(err => console.dir(err));
  };

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
    window.location.reload();
  };

  render() {
    const loggedIn = this.state.isLoggedIn;
    if (!loggedIn) {
      return <Route exact path="/" render={props => <Login {...props} />} />;
    }
    return (
      <div className="App">
        <div className="home-view">
          <div>
            <Sidebar
              notes={this.state.notes}
              addNote={this.addNote}
              logout={this.logout}
            />
          </div>

          <Switch>
            <Route exact path="/" render={props => <Login {...props} />} />
            <Route
              exact
              path="/home"
              render={props => (
                <NotesList
                  {...props}
                  notes={this.state.notes}
                  isLoggedIn={this.state.isLoggedIn}
                  editNote={this.editNote}
                  deleteNote={this.deleteNote}
                />
              )}
            />

            <Route
              exact
              path="/create"
              render={props => (
                <NoteForm
                  {...props}
                  notes={this.state.notes}
                  addNote={this.addNote}
                />
              )}
            />
            <Route
              exact
              path="/register"
              render={props => <Register {...props} notes={this.state.notes} />}
            />

            <Route
              exact
              path="/:id"
              render={props => (
                <NoteView
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                  editHandler={this.editHandler}
                  handleChange={this.handleChange}
                  deleteNote={this.deleteNote}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(App);

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       LoggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );
