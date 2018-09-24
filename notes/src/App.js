import React, { Component } from "react";
import Menu from "./components/menu";
import Notes from "./components/notes";
import NewNote from "./components/newnote";
import NoteFocus from "./components/notefocus";
import EditNote from "./components/editnote";
import { Route } from "react-router-dom";
import axios from "axios";
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
      tagging: false,
      pink: true,
      blue: false
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


  // componentDidUpdate() {
  //   axios
  //   .get("https://killer-notes.herokuapp.com/note/get/all")
  //   .then(response => {
  //     if (JSON.stringify(this.state.notes) !== JSON.stringify(response.data)){
  //     this.setState({ notes: response.data });}
  //   })
  // }

  noteInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  noteSubmit = () => {
    axios
      .post("http://localhost:5000/notes", {
        title: this.state.newtitle,
        text: this.state.newbody
      }).then(()=>{
        axios.get("http://localhost:5000/notes")
        .then(response => {
          console.log(response.data);
          this.setState(()=> ({notes: response.data }))
        })
      })
      .catch(error => {
        console.error("Server Error", error);
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

  // addTag = (id) => {
  //   console.log(this.state.tag);
  //   axios
  //   .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {
  //     tags: this.state.tag
  //   })
  // }

  editNote = id => {
    let notesCopy = this.state.notes.slice();
    let editnote = notesCopy.find(note => note.id == id);
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
    let deleting = !this.state.deleting;
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

  origtheme = () => {
    this.setState({ pink: false, blue: false });
  };

  pinktheme = () => {
    this.setState({ pink: true, blue: false });
  };

  bluetheme = () => {
    this.setState({ blue: true, pink: false });
  };

  render() {
    return (
      <div
        className={
          this.state.pink
            ? "page pagepink"
            : this.state.blue
              ? "page pageblue"
              : "page"
        }
      >
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
          render={props => (
            <Notes
              {...props}
              notes={this.state.notes}
              noteInput={this.noteInput}
              pink={this.state.pink}
              blue={this.state.blue}
            />
          )}
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
          path="/notes/:id"
          render={props => (
            <NoteFocus
              {...props}
              editNote={this.editNote}
              notes={this.state.notes}
              note={this.state.note}
              noteDelete={this.noteDelete}
              deleteModal={this.deleteModal}
              deleting={this.state.deleting}
              pink={this.state.pink}
              blue={this.state.blue}
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
