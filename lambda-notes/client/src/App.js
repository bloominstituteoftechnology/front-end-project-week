import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import CreateNote from './components/Notes/CreateNote';
//import ViewNote from './components/Notes/ViewNote';
import NoteNav from './components/Notes/NoteNav';


const defaultNotes = [{"id":0,"title":"Test note 1","body":"Test note body 1"},{"id":1,"title":"Test note 2","body":"Test note body 2"},{"id":2,"title":"Test note 3","body":"Test note body 3"},{"id":3,"title":"Test note 4","body":"Test note body 4"},{"id":4,"title":"Test note 5","body":"Test note body 5"},{"id":5,"title":"Test note 6","body":"Test note body 6"},{"id":6,"title":"Test note 7","body":"Test note body 7"},{"id":7,"title":"Test note 8","body":"Test note body 8"},{"id":8,"title":"Test note 9","body":"Test note body 9"}];


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (localStorage.getItem("names") === null) {
      localStorage.setItem("names", JSON.stringify(defaultNotes));
    }
  }

  render() {
    return (
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        <h1>Lambda Notes</h1>
          <Link to='/' ><div className='App__left-buttons'>
            <span>View Your Notes</span>
          </div></Link>
          <Link to='/NewNote'>
          <div className='App__left-buttons'>
            <span>+ Create New Note</span>
          </div></Link>
          
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
        {/* <NoteList /> */}
        <NoteNav />
        <Route exact path='/NewNote' component={CreateNote} />
        <Route exact path='/' component={NoteList} />
        {/* <CreateNote /> */}
        {/* <ViewNote 
        name='somthing' 
        body='some body holder note text for simple testing'
        /> */}
        </div> {/* end of right side div */}

      </div> // container div end
      
    );
  }
}

export default App;
