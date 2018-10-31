import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
// import { notes } from './data'
import { Route, Switch } from 'react-router-dom'
import NoteView from './components/NoteView'
import EditNote from './components/EditNote'
import AddNote from './components/AddNote'
import axios from 'axios';

 const url = "http://localhost:9000/notes";
 const urll = "http://localhost:9000/notes/:id";

class App extends Component {
  constructor(){
    super(),
    this.state={
      notes: [],
      id: "",
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        notes: response.data
      });
    });
  }


   handleChange = e => this.setState({[e.target.name]:e.target.value})

  // handleChange= event => {
  //   event.preventDefault();
  //   this.props.history.push("/notes");
  // };

  handleAddNote = () =>{
    
  //   let notes = this.state.notes.slice();
  //   notes.push({id:this.state.notes.length, title:this.state.title, content:this.state.content})
  //   this.setState({notes: notes, content:'', title:''})
  // }

  axios
      .post(url, { title: this.state.title, content: this.state.content })
      .then(response => {
        axios.get(url).then(response => {
          this.setState({ notes: response.data });
        });
        this.setState({ notes: response.data });
      });
  };

  handleNoteView = (id) =>
  axios
  .get(`${urll}/${id}`).then(response => {
    this.setState({ notes: response.data });
  });
  


  handleEditNote = (id) =>{
    // let notes = this.state.notes.map(note =>{
    //   if (note.id === this.state.selectedId)
    //    return Object.assign({}, note, {title:this.state.title, content: this.state.content})
    //   return note
    // });
  //   this.setState({notes: notes, content:'', title:''})
  // }
  
 

axios
      .put(`${urll}/${id}`, { title: this.state.title, content: this.state.content })
      .then(response => {
        axios.get(urll).then(response => {
          this.setState({ notes: response.data });
        });
        this.setState({ notes: response.data });
      });
  };

  handleId = id =>{
    this.setState({selectedId: id})
  }

//   handleDelete = () => {
//   //   let notes = this.state.notes.filter(note =>{
//   //     return note.id !== this.state.selectedId
//   //   })
//   //   this.setState({notes: notes})
//   // }

//   axios
//   .delete(`${url}/${id}`, {
//     title: this.state.title,
//     content: this.state.content
//   }).then(response => {
//     axios.get(url).then(response => {
//       this.setState({ notes: response.data });
//     });
//   });
// };

  render() {console.log(this.state)
    return (
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path = '/' render = {props =>
            <NoteList {...props} 
              handleId = {this.handleId} 
              notes = {this.state.notes} 
            />} 
          />
          <Route exact path = '/:id' render = {props =>
            <NoteView {...props} 
              notes = {this.state.notes} 
              handleDelete = {this.handleDelete}
            />} 
          />
          <Route exact path = '/:id/edit' render = {() => 
            <EditNote 
              handleEditNote = {this.handleEditNote}
              handleChange = {this.handleChange}
              content = {this.state.content}
              title = {this.state.title}
            />} 
          />
          <Route exact path = '/note/new' render = {props =>
            <AddNote {...props} 
              handleChange = {this.handleChange} 
              handleAddNote = {this.handleAddNote} 
              content = {this.state.content}
              title = {this.state.title}
            />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;