import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavBar/NavBar";
import NoteList from "./components/ListView/NoteList";
import IndividualNote from "./components/ListView/IndividualNote";
import NoteForm from "./components/NewNoteView/NoteForm";
import Login from "./components/LoginComponents/Login";
import RegistrationPage from './components/LoginComponents/RegistrationPage.js'
import { AppDiv } from "./Styles/AppStyles";
import { Route, withRouter, Redirect } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

const URL = "https://jstodd-projectweek-backend.herokuapp.com/api/notes/";
const URL2 = "https://jstodd-projectweek-backend.herokuapp.com/api";

const existingNote = {
  title: "",
  textBody: "",
  tags: []
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      noteObj: {
        title: "",
        textBody: "",
        tags: []
      },
      isEditing: false,
      editingID: null,
      filteredNotes: [],
      filterTarget: "",
      loggedIn: false,
      username: "",
      password: ""
    };
  }

  componentDidUpdate() {
    if (this.state.loggedIn === true) {
      axios
        .get(`${URL}`)
        .then(response => this.setState({ notes: response.data }))
        .catch(error =>
          console.log(`You must log in to see notes content: ${error}`)
        );
    }
  }

  // New/Edit Input Change Handler
  changeHandler = ev => {
    this.setState({
      noteObj: {
        ...this.state.noteObj,
        [ev.target.name]: ev.target.value
      }
    });
  };

  // Tags Input Change Handler
  tagsHandler = ev => {
    this.setState({
      noteObj: {
        ...this.state.noteObj,
        [ev.target.name]: ev.target.value.split(",")
      }
    });
  };

  //SearchBar Change Handler
  searchBarHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  filter = ev => {
    this.searchBarHandler(ev);
    this.setState(prevState => {
      const filteredNotes = prevState.notes.filter(note => {
        return (
          note.title.toLowerCase().includes(prevState.filterTarget) ||
          note.textBody.toLowerCase().includes(this.state.filterTarget)
        );
      });
      return { filteredNotes: filteredNotes };
    });
  };

  // Add Note Function
  addNote = () => {
    if (
      this.state.noteObj.title === "" ||
      this.state.noteObj.textBody === "" ||
      this.state.noteObj.tags === ""
    ) {
      return alert("All fields must have content, please try again.");
    }
    axios
      .post(`${URL}`, this.state.noteObj)
      .then(response => {
        this.state.noteObj.id = response.data.id;
        this.setState({
          notes: [this.state.noteObj, ...this.state.notes],
          noteObj: {
            title: "",
            textBody: "",
            tags: ""
          },
          downloadAllModal: false
        });
      })
      .catch(error => alert(error));
  };

  // Delete Note Function
  deleteNote = (ev, id) => {
    ev.preventDefault();
    axios.delete(`${URL}/${id}`).then(response => {
      const deletedNotes = this.state.notes.filter(
        note => note.id.toString() !== id
      );
      this.setState({ notes: deletedNotes });
    });
  };

  // Edit Note Function
  editNote = () => {
    axios
      .put(`${URL}/${this.state.editingID}`, this.state.noteObj)
      .then(response => {
        const updatedNotes = this.state.notes.map(note => {
          if (response.data.id == note.id) {
            return response.data;
          }
          return note;
        });
        this.setState({
          notes: updatedNotes,
          editingID: null,
          noteObj: existingNote
        });
      })
      .catch(error => alert(error));
  };

  // Toggle Edit Note Form
  toggleEditNoteForm = (ev, note) => {
    ev.preventDefault();
    this.setState({
      noteObj: note,
      isEditing: true,
      editingID: note.id
    });
  };

  // Modal Functions
  openDLAModal = () => {
    this.setState({ downloadAllModal: true });
  };

  closeDLAModal = () => {
    this.setState({ downloadAllModal: false });
  };

  getCookie = () => {
    sessionStorage.getItem("");
  };

  // Register Function

  registerFunction = ev => {
    ev.preventDefault()
    axios
    .post(`${URL2}/register`, {username: this.state.username, password: this.state.password})
    .then(res => {
      this.setState({loggedIn: true})
      this.props.history.push('/home')
    })
  }


  // Login Function
  loginFunction = ev => {
    ev.preventDefault();
    axios
      .post(`${URL2}/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        this.setState({ loggedIn: true });
        this.props.history.push("/home");
      });
  };
  // Logout Function

  logoutFunction = ev => {
    ev.preventDefault();
    axios.get(`${URL2}/logout`).then(res => {
      this.setState({ loggedIn: false });
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <AppDiv>
        {this.state.loggedIn ? (
          <NavigationBar
            filterTarget={this.state.filterTarget}
            filter={this.filter}
            notes={this.state.notes}
            downloadAllModal={this.state.downloadAllModal}
            openDLAModal={this.openDLAModal}
            closeDLAModal={this.closeDLAModal}
            logoutFunction={this.logoutFunction}
          />
        ) : null}

        <Route
          exact
          path="/"
          render={props => (
            <Login
              {...props}
              loggedIn={this.state.loggedIn}
              searchBarHandler={this.searchBarHandler}
              password={this.state.password}
              username={this.state.username}
              loginFunction={this.loginFunction}
            />
          )}
        />

        <Route 
        path="/register"
        render={props => (
          <RegistrationPage
          {...props}
          loggedIn={this.state.loggedIn}
          searchBarHandler={this.searchBarHandler}
          password={this.state.password}
          username={this.state.username}
          registerFunction={this.registerFunction}
        />
        
        )}
        />

        <Route
          exact
          path="/home"
          render={props =>
            !this.state.loggedIn ? (
              <Redirect to="/" />
            ) : (
              <NoteList
                {...props}
                notes={
                  this.state.filteredNotes.length > 0
                    ? this.state.filteredNotes
                    : this.state.notes
                }
              />
            )
          }
        />
        <Route
          path="/home/:id"
          render={props => (
            <IndividualNote
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
              toggleEditNoteForm={this.toggleEditNoteForm}
            />
          )}
        />
        <Route
          path="/form"
          render={props => (
            <NoteForm
              {...props}
              noteObj={this.state.noteObj}
              changeHandler={this.changeHandler}
              addNote={this.addNote}
              editingID={this.state.editingID}
              isEditing={this.state.isEditing}
              editNote={this.editNote}
              tagsHandler={this.tagsHandler}
            />
          )}
        />
      </AppDiv>
    );
  }
}

export default withRouter(App);
