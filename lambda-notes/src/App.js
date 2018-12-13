import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SideBar from "./components/SideBar";
import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";
import NotePage from "./components/NotePage";
import EditForm from "./components/EditForm";
import Login from './components/Login';
import Register from './components/Register';

const url = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      newTitle: "",
      newTextBody: "",
      delete: false,
      loggedIn: false
    };
  }

  componentDidMount() {
    this.authenticate();
  }
  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    console.log(this.props);
    console.log(prevProps);
    if (pathname === '/' && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
    axios
      .get("https://fsw14-lambda-notes-api.herokuapp.com/api/notes")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  authenticate = () => {
    const token = localStorage.getItem('secret_token');
    const options = {
      headers: {
        authorization: token
      }
    };

    if (token) {
      axios.get(`${url}/api/notes`, options)
        .then((res) => {
          if (res.status === 200 && res.data) {
            this.setState({ loggedIn: true, notes: res.data });
          }
          else {
            throw new Error();
          }
        })
        .catch((err) => {
          this.props.history.push('/login');

        });
    } else {
      this.props.history.push('/login');
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = () => {
    axios
      .post("https://fsw14-lambda-notes-api.herokuapp.com/api/notes", {
        title: this.state.title,
        textBody: this.state.textBody
      })
    this.setState({ title: "", textBody: "" });
  };

  editNote = id => {
    axios
      .put(`https://fsw14-lambda-notes-api.herokuapp.com/api/notes/${id}`, {
        title: this.state.newTitle,
        textBody: this.state.newTextBody
      })
    this.setState();
  };
  editNoteContent = (title, textBody) => {
    this.setState({ newTitle: title, newTextBody: textBody });
  };

  deleteToggleOn = () => {
    this.setState({ delete: true });
  };

  deleteToggleOff = event => {
    event.preventDefault();
    this.setState({ delete: false });
  };
  
  deleteNote = id => {
    axios
      .delete(`https://fsw14-lambda-notes-api.herokuapp.com/api/notes/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState();
  };
  render() {
    return (
      <div className="app">
        <SideBar />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props => (
            <NotesList
              {...props}
              notes={this.state.notes}
              changeHandler={this.changeHandler}
            />
          )}
        />
        <Route
          exact
          path="/create"
          render={props => (
            <NotesForm
              {...props}
              title={this.state.title}
              textBody={this.state.textBody}
              changeHandler={this.changeHandler}
              addNote={this.addNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id"
          render={props => (
            <NotePage
              {...props}
              notes={this.state.notes}
              editNoteContent={this.editNoteContent }
              delete={this.state.delete}
              deleteToggleOn={this.deleteToggleOn}
              deleteToggleOff={this.deleteToggleOff}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id/edit"
          render={props => (
            <EditForm
              {...props}
              notes={this.state.notes}
              changeHandler={this.changeHandler}
              newTitle={this.state.newTitle}
              newTextBody={this.state.newTextBody}
              editNote={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
