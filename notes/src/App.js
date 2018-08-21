import React, { Component } from "react";
import Menu from "./components/menu";
import Notes from "./components/notes";
import NewNote from "./components/newnote";
import NoteFocus from "./components/notefocus";
import EditNote from "./components/editnote";
import { Route } from "react-router-dom";
import axios from 'axios';
import dummydata from "./dummydata";
import "./CSS/listview.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {},
      newtitle: "",
      newbody: "",
      id: 5,
      edittitle: "",
      editbody: "",
      deleting: false,
      pink: false,
      blue: false,
    };
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  noteInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  noteSubmit = () => {
    axios.post('https://killer-notes.herokuapp.com/note/create', {title: this.state.newtitle, textBody: this.state.newbody})
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Server Error', error);
      console.log(this.state.notes)
    });
  

  //pre API code

    // let notes = this.state.notes.slice();
    // let id = this.state.id;
    // if (this.state.newtitle.trim() !== "" || this.state.newbody.trim() !== "") {
    //   id++;
    //   notes.push({
    //     id: id,
    //     title: this.state.newtitle,
    //     text: this.state.newbody
    //   });
    //   this.setState({ notes, newtitle: "", newbody: "", id });
    // }
  };

  editNote = id => {
    let notesCopy = this.state.notes.slice();
    let editnote = notesCopy.find(note => note.id == id);
    this.setState({ edittitle: editnote.title, editbody: editnote.text });
  };

  submitEdit = id => {
    let notesCopy = this.state.notes.map(note =>Object.assign({}, note));
    let editnote = notesCopy.find(note => note.id == id);
    editnote.title = this.state.edittitle;
    editnote.text = this.state.editbody;
    if ((this.state.edittitle.trim() !== "" || this.state.editbody.trim() !== "")){
      this.setState({notes: notesCopy})
    }
  };

  deleteModal = () => {
    let deleting = !this.state.deleting
    this.setState({ deleting });
  };

  noteDelete = id => {
    let notesCopy = this.state.notes.slice();
    let notesLeft = notesCopy.filter(note => note.id != id);
    console.log(notesLeft);
    this.setState({ notes: notesLeft, deleting: false });
  };

  origtheme = () => {
    this.setState({pink: false, blue: false})
  }

 pinktheme = () => {
    this.setState({pink: true, blue: false})
  }

  bluetheme = () => {
    this.setState({blue: true, pink: false})
  }

  render() {
    return (
      <div className={this.state.pink ? "page pagepink": this.state.blue ? "page pageblue" :"page"}>
        <Menu 
          deleting={this.state.deleting}
          pink={this.state.pink}
          blue={this.state.blue}
          origtheme={this.origtheme}
          pinktheme={this.pinktheme}
          bluetheme={this.bluetheme}
        />
        <Route
          exact
          path="/"
          render={props => 
          <Notes {...props} 
          notes={this.state.notes}
          pink={this.state.pink} 
          blue={this.state.blue}
          />}
        />
        <Route
          exact
          path="/new"
          render={props => (
            <NewNote
              {...props}
              noteInput={this.noteInput}
              noteSubmit={this.noteSubmit}
              pink={this.state.pink}
              blue={this.state.blue}
            />
          )}
        />
        <Route
          exact
          path="/notes/:_id"
          render={props => (
            <NoteFocus
              {...props}
              editNote={this.editNote}
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
          path="/notes/edit/:id"
          render={props => (
            <EditNote
              {...props}
              noteInput={this.noteInput}
              submitEdit={this.submitEdit}
              editbody={this.state.editbody}
              edittitle={this.state.edittitle}
              notes={this.state.notes}
              pink={this.state.pink}
              blue={this.state.blue}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
