import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

// Component Imports
import SideBar from './components/sidebar/SideBar'
import NoteList from './components/NoteList';
import CreateNew from './components/CreateNew';
import ViewNote from './components/ViewNote'

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
  //        Functions for other components
  createNewSubmit = e =>{
    e.preventDefault();
    axios.post('https://killer-notes.herokuapp.com/note/create',this.state.newNote)
    .then(response => {
      this.setState({notes : response.data, newNote : {
        title : '',
        textBody : '',
      }})
      console.log("New Note has been added", response.data)
    })
    .catch(error => console.log("ERROR :::", error));
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    // console.log(this.state.newNote)
  }
  //        End Functions

  componentDidMount(){
    //will fetch data from the api
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes : response.data}))
      .catch(error => alert("CDM ::: Axios says :", error))
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' render={() => <NoteList notes={this.state.notes} /> } />
        {/* Create New Card Route  */}
        <Route path='/create-new' render={() => <CreateNew 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        />} />
        {/* Edit Card Route */}
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} /> } />
      </div>
    );
  }
}

export default App;
