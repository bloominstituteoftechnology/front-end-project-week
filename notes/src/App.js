import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';
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

  refreshState(){
    axios.get('http://localhost:9000/api/notes')
    .then(response => this.setState({notes : response.data}))
    .catch(error => console.log("Refresh State ::: Axios says :", error))
  }

  componentDidMount(){
    
    axios.get('http://localhost:9000/api/notes')
      .then(response => this.setState({notes : response.data}))
      .catch(error => alert("CDM ::: Axios says :", error))
  }

  
  createNewSubmit = e =>{
    e.preventDefault();
    axios.post('http://localhost:9000/api/notes',
    this.state.newNote)
    .then(response => {
      this.setState({newNote : {
        title : '',
        textBody : ''
      }})
      console.log("New Note has been added", response)
      this.forceUpdate();
    })
    .catch(error => alert("Something happened! Uh Oh! Try again!", error));
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    
    
  }
  


render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' render={() => <ListNotes notes={this.state.notes} /> } />
        <Route path='/create-new' render={() => <NoteForm 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        />} />
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} /> } />
        <Route path='/edit/:id' render={(props) => <NoteEdit {...props} notes={this.state.notes} /> } />
      
        
      </div>
    );
  }
}

export default App;