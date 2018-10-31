import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';
// Component Imports
import SideBar from './Components/Sidebar/SideBar'
import NoteList from './Components/NoteList';
import CreateNew from './Components/CreateNew';
import ViewNote from './Components/ViewNote'
import EditNote from './Components/EditNote'
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
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes : response.data}))
    .catch(error => console.log("Refresh State ::: Axios says :", error))
  }

  createNewSubmit = e =>{
    e.preventDefault();
    axios.post('https://fe-notes.herokuapp.com/note/create',this.state.newNote)
    .then(response => {
      this.setState({newNote : {
        title : '',
        textBody : '',
      }})
     alert("New Note has been added", response)
      this.refreshState();
    })
    .catch(error => alert("ERROR :::", error));
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    
  }
  

  componentDidMount(){
    
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes : response.data}))
      .catch(error => alert("CDM ::: Axios says :", error))
  }
render() {
    return (
      <div className="App">
        <SideBar refresh={this.refreshState()}/>
        <Route exact path='/' render={() => <NoteList notes={this.state.notes} /> } />
        {/*  New   */}
        <Route path='/create-new' render={() => <CreateNew 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        />} />
        {/* View  */}
        <Route path='/view/:id' render={(props) => <ViewNote {...props} refresh={this.refreshState} notes={this.state.notes} /> } />
        {/* Edit  */}
        <Route path='/edit/:id' render={(props) => <EditNote {...props} refresh={this.refreshState} notes={this.state.notes} /> } />
      
        
      </div>
    );
  }
}

export default App;
