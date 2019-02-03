
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Note from "./components/Note";
import NewNoteForm from "./components/NewNoteForm";
import EditNote from "./components/EditNote";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      username: "",
      title: "",
      content: "",
      term: ""
      // secret: 'no secret',
      // values: []
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("jwt");
    this.setState({ username: user });

    axios
      .get("http://localhost:2200/api/notes")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
   }
   

  

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };





  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
  addNote = (event) => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
    };
    axios
    .post(`http://localhost:2200/api/notes`,newNote)
    .then(res => {
      console.log(res);
      axios
      .get("http://localhost:2200/api/notes")
      .then(res => {
      console.log(res.data);
      this.setState({notes: res.data , title: '' , content: ''})
      this.props.history.push('/notes');
      })
    })
      .catch(error => {
      console.error("Server Error", error);
    })
  }


  deleteNote = (noteID) => {
    axios
    .delete(`http://localhost:2200/api/notes/${noteID}`)
    .then(res => {
      axios
      .get("http://localhost:2200/api/notes")
      .then(res => {
        console.log(res.data);
        this.setState({ notes: res.data });
        this.props.history.push('/notes');
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    }
    )}


    editNote = (event, noteID ,title, content) => {
      event.preventDefault();
  
      const editedNote = { title, content };
  
      axios
        .put(`http://localhost:2200/api/notes/${noteID}`, editedNote)
        .then(res => {
          // const editedNote = res.data;
  
          const notes = this.state.notes.slice();
          for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === noteID) {
              notes[i] = editedNote;
            }
          }
  
          this.setState({ notes }, () =>  this.props.history.push(`/notes`));
         
        })
        .catch(err => console.error(err));
    };
  



  render() {
    return (
      <div className="App">
      {/* <Header/> */}
       <Route 
          exact path = "/login" 
          component = {Login}> 
       </Route>
        <Route 
        exact path = "/signup" 
        component = {Signup}>
        </Route>
      <Route
      path = "/notes"
      component={Sidebar}>
       </Route>
    
        <Route
          exact
          path="/notes"
          render={props => (
            <Notes
              {...props}
              notes={this.state.notes}
              logOut={this.logOut}
              searchHandler={this.searchHandler}
              term={this.state.term}
            />
          )}
        />
        <Route
          exact
          path="/notes/create-new-note"
          render={props => (
            <NewNoteForm
              {...props}
              title={this.state.title}
              content={this.state.content}
              addNote={this.addNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/notes/note/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              title={this.state.title}
              content={this.state.content}
              deleteNote={this.deleteNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/notes/note/:id/edit"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              editNote={this.editNote}
            />
          )}
        />
      </div>
      );
    }

    logOut = event => {
      localStorage.removeItem('jwt');
      this.props.history.push('/login');
    };
 }

export default withRouter(App);































