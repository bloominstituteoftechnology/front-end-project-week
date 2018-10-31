import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NoteListContainer from './components/NoteListContainer';
import NavSideBar from './components/NavSideBar';
import AddNote from './components/AddNote';
import SingleNote from './components/SingleNote';
import EditNote from './components/EditNote';
import { Route } from "react-router-dom";



class App extends Component {
  constructor(){
    super()
    this.state = {
      notes:  [],
      title: "",
      textBody: "",
      activeNote: "",
      editId: null,
    }
  }



  componentDidMount() {
    // axios.get("https://fe-notes.herokuapp.com/note/get/all")
    //      .then(response => {
    //        this.setState({ notes: response.data })
    //      })
    //      .catch(error => {
    //        console.log("error", error)
    //      })
    this.getNotes();
  }

  getNotes = () => {
    axios.get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(error => {
      console.log("error", error)
    })
  }


  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  addNewNote = () => {
    const newNotes = {
      title: this.state.title,
      textBody: this.state.textBody
    }

    axios.post("https://fe-notes.herokuapp.com/note/create", newNotes )
          .then(response => {
            console.log("response", response.data.success)
           newNotes._id = response.data.success;
           console.log("this is a test",newNotes)
           this.setState({title: "",textBody:"", notes: [...this.state.notes, newNotes]})
          })
        // this.setState({title: "",textBody:"", notes: [...this.state.notes, newNotes]})
  }

  getNoteId = (item) => {
   console.log(item)
    axios
        .get(`https://fe-notes.herokuapp.com/note/get/${item._id}`)
        .then(res => {
          console.log("res", res.data)
          this.setState({ activeNote: res.data})
        })
  }

  deleteNote = (id) => {
    
    console.log("delete", id)
     axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
     .then(res => {
       console.log("delete this",res.data)
      //  this.setState({ notes: [...this.state.notes]})
      this.getNotes();
     })
     .catch(error => {
       console.log("error", error)
     })
  }


  // editNote = () => {
  //   console.log("this state id editnote", this.state.editId)

  //   axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.state.editId}`,
  //        {title: this.state.title, textBody: this.state.textBody})
  //         .then(res => {
  //           console.log("edit", res.data)
  //           this.setState({ notes: [...this.state.notes], editId: null, title:"", textBody:"" })
  //         })
  // }

  goToEditForm = (ev, notes) => {
    ev.preventDefault();
    console.log("goeditform", notes)
    this.setState({
      title: this.state.title,
      textBody: this.state.textBody,
      editId: notes
    })
  }
       
  


  render() {
    return (
      <div className="App">
      <div className="nav-width"></div>
      <NavSideBar />
      <Route exact path ="/note-list/:id" render={props => (
        <SingleNote {...props} deleteNote={this.deleteNote} note={this.state.activeNote} goToEditForm={this.goToEditForm} />
      )} />
      <Route exact path="/note-list/" render={props => (
        <NoteListContainer {...props} notes={this.state.notes} getNoteId={this.getNoteId} />
      )} />
      <Route exact path="/add-Note" render={props => (
        <AddNote 
        {...props} 
        changeHandler={this.changeHandler} 
        addNewNote={this.addNewNote} 
        addBody={this.state.textBody}
        addTitle={this.state.title} />
      )} />
      <Route exact path="/edit-Note/:id" render={props => (
        <EditNote 
        {...props}
        unEditView={this.unEditView}
        getNote={this.getNotes}
        // title={this.state.title}
        // textBody={this.state.textBody}
        // changeHandler={this.changeHandler} 
        // addBody={this.state.textBody}
        // addTitle={this.state.title}
        editNote={this.editNote}
        note={this.state.activeNote}
        // notes={this.state.notes}
         />
      )} />
      </div>
    );
  }
}

export default App;