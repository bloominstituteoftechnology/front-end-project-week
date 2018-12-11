import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import './App.css';
import Sidebar from './components/Sidebar';
import EditNote from './components/EditNote';
import ViewNote from './components/ViewNote';

export default class App extends Component {
  constructor(){
    super();
    this.state = 
    {
      notes : [],
      newNote : {
        title : '',
        textBody : '',
        searchText: "",
      }
    }
  }

  refreshState(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes : response.data}))
    .catch(error => console.log(error))
  }
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(e => { console.log(e) } )
  }

  createNewSubmit = e =>{
    e.preventDefault();
    axios.post('https://fe-notes.herokuapp.com/note/create',this.state.newNote)
    .then(response => {
      this.setState({newNote : {
        title : '',
        textBody : '',
      }})
      console.log("New Note has been added", response)
      this.forceUpdate();
    })
    .catch(e => { console.log(e) } );
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path='/' render={() => <NoteList notes={this.state.notes} /> } />
        {/*  New   */}
        <Route path='/create-new' render={() => <NewNote
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        />} />
        {/* View  */}
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} /> } />
        {/* Edit  */}
        <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} /> } />
      </div> 
    );
  }
}
