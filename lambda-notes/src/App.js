import React, { Component } from "react";
import Menu from "./Components/Menu";
import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";
import SingleNote from "./Components/SingleNote";
import EditNote from "./Components/EditNote";
import { Route } from "react-router-dom";
import axios from "axios";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      notetitle: "",
      notebody: "",
      id: null ,
      edittitle: "",
      edittext: "",
      deleting: false,
      tagging: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/notes")
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
       .catch(error => {
         console.error("Server Error", error);
       });
   }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  noteSubmit = () => {
    axios
      .post("http://localhost:5000/notes", {
        title: this.state.newtitle,
        text: this.state.newbody
      }).then(()=>{
        axios.get("http://localhost:5000notes")
        .then(response => {
          console.log(response.data);
          this.setState(()=> ({notes: response.data }))
        })
      })
      .catch(error => {
        console.error("Server Error", error)
      });
    };

  editHandler = id => {
    let notecopy = this.state.notes.slice();
    let editnote = notecopy.find(note => note.id == id);
    this.setState({ edittitle: editnote.title, editbody: editnote.text });
  };

  submitEdit = id => {
    axios.put(`http://localhost:5000/notes/${id}`, {
      title: this.state.edittitle,
      text: this.state.editbody}).then(()=>{
        axios.get("http://localhost:5000/notes")
        .then(response => {
          this.setState({ notes: response.data })
        })
      })
  };

  deleteModal = () => {
    let deleting = !this.state.deleting
    this.setState({ deleting });
  };

  closeModal = () => {
    this.setState({ tagging: !this.state.tagging });
  };

  noteDelete = id => {
    axios.delete(`http://localhost:5000/notes/${id}`)
    .then(()=> {
      axios.get("http://localhost:5000/notes")
      .then(response => {
        this.setState({ notes: response.data, deleting: false })
      })
    })
  };

  render() {
    return (
      <div className="App">
        <Menu deleting={this.state.deleting}/>
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/newnote"
          render={props => (
            <NewNote
              {...props}
              inputHandler={this.inputHandler}
              submitNote={this.submitNote}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <SingleNote
            {...props}
            editNote={this.editHandler}
            notes={this.state.notes}
            note={this.state.note}
            noteDelete={this.noteDelete}
            deleteModal={this.deleteModal}
            deleting={this.state.deleting}
            />
          )}
        />
        <Route
          exact
          path="/notes/editnote/:id"
          render={props => (
            <EditNote
              {...props}
              inputHandler={this.inputHandler}
              submitChange={this.submitChange}
              editbody={this.state.editbody}
              edittitle={this.state.edittitle}
              notes={this.state.notes}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
