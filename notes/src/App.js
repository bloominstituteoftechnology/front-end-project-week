import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

// Component Imports
import SideBar from './components/sidebar/SideBar'
import NoteList from './components/NoteList';
import CreateNew from './components/CreateNew';
import ViewNote from './components/ViewNote'
import EditNote from './components/EditNote'

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

  refreshState(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes : response.data}))
    .catch(error => console.log("Refresh State ::: Axios says :", error))
  }
  //        Functions for other components
  createNewSubmit = e =>{
    e.preventDefault();
    axios.post('https://fe-notes.herokuapp.com/note/create',this.state.newNote)
    .then(response => {
      this.setState({/*notes : {response.data} */newNote : {
        title : '',
        textBody : '',
      }})
      this.refreshState();
      this.history.push("/");
    })
    .catch(error => alert("ERROR :::", error));
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
        <SideBar refresh={this.refreshState()}/>
        <Route exact path='/' render={() => <NoteList notes={this.state.notes} /> } />
        {/* Create New Card Route  */}
        <Route path='/create-new' render={() => <CreateNew 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        { ...this.props }
        />} />
        {/* View Card Route */}
        <Route path='/view/:id' render={(props) => <ViewNote {...props} refresh={this.refreshState()} notes={this.state.notes} /> } />
        {/* Edit Card Route */}
        <Route path='/edit/:id' render={(props) => <EditNote {...props} refresh={this.refreshState()} notes={this.state.notes} /> } />
      </div>
    );
  }
}

export default App;
