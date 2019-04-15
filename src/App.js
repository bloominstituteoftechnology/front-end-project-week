import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import NewNote from './components/NewNote';
import NavNotes from './components/NavNotes';
import EditNote from './components/EditNote.js';
import LogingForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import User from "./components/User"; 
import Home from "./components/Home";
import axios from 'axios';


const backend = "https://contact-notes.herokuapp.com/";
// let backend = 'http://localhost:5000/';
// let heroku = 'https://lamb-notes.herokuapp.com/';
// if (typeof(backend) !== 'string') {
//   backend = heroku;
// }

class App extends Component {
  constructor() {
    super();
    this.state={
        notes: [],
        title: '',
        content: ''
      }
    }

    componentDidMount() {
      const token = localStorage.getItem('token');
      const headers = { "headers": { "authorization": token } };
      axios.get(`${backend}api/notes`, headers)
      .then(notes => {             

        this.setState({notes: notes.data })
      })
      .catch(err => {
        // console.log("Error", err);
      })

    }
    SaveNote = (note) => {  
      // const notes = [...this.state.notes, note];
      const token = localStorage.getItem('token');
      const headers = { "headers": { "authorization": token } };
      axios.post(`${backend}api/notes`, note, headers)
      .then(notes => {
        // console.log("New Note", note);
        this.setState({ notes: [...this.state.notes, note]});
           
      })
      .catch(err => {
        // console.log(err);
      })
}

handleEdit = (element) => { 
//  this.state.notes.filter((note, index) => {
//    if ( note._id === element._id) {
//      this.state.notes.splice(index, 1, element);
//   }
// })
const token = localStorage.getItem('token');
const headers = { "headers": { "authorization": token } };
axios.put(`${backend}api/notes/${element._id}`, element, headers)
.then(result => {
  // console.log("Result", result)
  this.setState({ notes: [...this.state.notes, result]});  
   
})
.catch(err => {
  // console.log("MY error Message", err);
})
 }
 handleDelete = (element) => {
  const token = localStorage.getItem('token');
  const headers = { "headers": { "authorization": token } };
   axios.delete(`${backend}api/notes/${element._id}`, headers)
   .then(response => {
    // console.log("Handle Delete res", element._id)
   })
   .catch(err => {
    //  console.log("Delete error", err);
   })
 }

 logOut = () => {
   this.setState({ notes: null});   
 }
  render() {
    return (
      <div className="App">
        <NavNotes />
        <Route path="/notes" render={(props) => <Notes {...props} state={this.state} logout={this.logOut} />}/>
        <Route exact path="/" component={Home} />
        {localStorage.getItem("token") ? (
        <Route path="/user" component={User} />
        ) : ( null )
        }
        <Route path="/login" component={LogingForm} />
        <Route path="/register" component={SignUpForm} />
        <Route path="/new" render={(props) => <NewNote  {...props} save={this.SaveNote}/>} />        
        <Route path="/note/:_id" render={(props) => <Note {...props}state={this.state} delete={this.handleDelete}/>} />     
        <Route path="/edit/:_id" render={(props) => <EditNote {...props}state={this.state} edit={this.handleEdit} />}/>        
      </div>

    );
  }
}
export default App;
