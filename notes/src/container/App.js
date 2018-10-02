import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import NotesList from '../components/NotesList';
import NoteForm from '../components/NoteForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:[]
    }
  }

  componentDidMount() {
    axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
          .then(res => {
            //console.log(res);
            this.setState({notes: res.data});
          }).catch(err => console.error(`Error: ${err}`));
  }


  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">List View</h1>
        </header>
        <hr />
        <div className='navBar'>        
        <NavLink to="/create-notes">
          + Create New Note
        </NavLink>
        
        <NavLink to="/notes">
          View Your Notes
        </NavLink>
      </div> 
        <hr />
        <Route path='/create-note' component={NoteForm} />
        <Route exact path='/notes'  Component={NotesList} />
        {/* <NoteForm />
        <NotesList notes={this.state.notes} /> */}
      </React.Fragment>
    );
  }
}

export default App;
