import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import {
  Route,
  NavLink,
} from 'react-router-dom';

import dummyData from './dummydata';
import NoteList from './components/NoteList'
import NotePage from './components/NotePage';
import CreateNote from './components/CreateNote';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      note: 
        {
          title: '',
          content: '',
        },
      noteList: [],
      input: ''
    }
  }

  componentDidMount() {
      this.setState({
          noteList: dummyData
      })
//     axios
//       .get('localhost:5050/api/notes')
//       .then(response => {
//         console.log(response)
//         this.setState({noteList: response.data})
//       })
//       .catch(err => {
//         console.log("IN CATCH", err);
//       })
    }

  render() {
    return (
      <div className="App">
        <nav className='side-bar'>
          <h1>Lambda Notes</h1>
          <NavLink className='side-barBTN' to='/'>
            View Your Notes
          </NavLink >
          <NavLink className='side-barBTN' to='/create'>
            + Create A Note
          </NavLink>
        </nav>
        
        <Route exact path='/' render={props => (
          <NoteList content={this.state.noteList} {...props}/>
        )}/>
        <Route
          exact path='notes/:id'
          component={NotePage} />
        <Route exact path='/create' component={CreateNote} />
 
        
      </div>
    );
  }
}

export default App;
