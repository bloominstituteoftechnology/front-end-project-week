import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

// Component Imports
import SideBar from './components/sidebar/SideBar'
import NoteList from './components/NoteList';
import CreateNew from './components/CreateNew';
class App extends Component {

  constructor(){
    super();
    this.state = 
    {
      notes : [],
    }
  }

  componentDidMount(){
    //will fetch data from the api
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({notes : response.data}))
      .catch(error => alert("CDM ::: Axios says :", error))
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' render={() => <NoteList notes={this.state.notes} /> } />
        {/* Create New Card Route  */}
        <Route path='/create-new' render={() => <CreateNew />} />
      </div>
    );
  }
}

export default App;
