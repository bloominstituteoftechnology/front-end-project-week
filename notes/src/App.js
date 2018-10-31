import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';
// Component Imports
import SideBar from './Components/Sidebar'
import ListNotes from './Components/ListNotes';
import NoteForm from './Components/NoteForm';
import ViewNote from './Components/ViewNote'
import NoteEdit from './Components/NoteEdit'
class App extends Component {

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
  componentDidMount(){
    
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes : response.data}))
      .catch(error => alert("CDM ::: Axios says :", error))
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
    .catch(error => alert("ERROR :::", error));
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    
  }
  


render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' render={() => <ListNotes notes={this.state.notes} /> } />
        {/*  New   */}
        <Route path='/create-new' render={() => <NoteForm 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        />} />
        {/* View  */}
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} /> } />
        {/* Edit  */}
        <Route path='/edit/:id' render={(props) => <NoteEdit {...props} notes={this.state.notes} /> } />
      
        
      </div>
    );
  }
}

export default App;