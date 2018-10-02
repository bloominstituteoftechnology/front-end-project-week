import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';
import NotesList from '../components/NotesList';
import NoteForm from '../components/NoteForm';
import NotePage from '../components/NotePage';
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
        <ul className='navBar'>         
        <NavLink to="/create-note" className='button'>
          + Create New Note
        </NavLink>
        
        <NavLink to="/notes" className='button'>
          View Your Notes
        </NavLink>
      </ul> 

        <NavLink to="/notes:id" className='button'>
          {NotePage}
        </NavLink>
      
        <Route 
          exact path='/create-note' 
          component={NoteForm} 
        />
        <Route 
          exact path='/notes' 
          render={(props) => 
            (<NotesList {...props} 
            notes={this.state.notes} />)} 
          />
          <Route 
          path='/notes/:id' 
          render={(props) => 
            (<NotePage {...props} 
            notes={this.state.notes} />)} />

      </React.Fragment>
    );
  }
}

export default App;
