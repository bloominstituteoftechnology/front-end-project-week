import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';
// Component Imports
import SideBar from './Components/Sidebar/SideBar'
import NoteList from './Components/NoteList';
import CreateNew from './Components/Sidebar/SideBar';
class App extends Component {
  constructor(){
    super();
    this.state = 
    {
      notes : [],
      newNote : {
        title : '',
        textBody : '',
      }
    }
  }
  

  createNewSubmit = e =>{
    e.preventDefault();
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    console.log(this.state.newNote)
  }
  
  componentDidMount(){
    
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes : response.data}))
      .catch(error => alert("CDM ::: Axios says :", error))
  }
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' render={() => <NoteList notes={this.state.notes} /> } />
        {/* New Card  */}
        <Route path='/create-new' render={() => <CreateNew 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        />} />
      </div>
    );
  }
}
export default App;
