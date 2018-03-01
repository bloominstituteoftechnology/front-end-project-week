/* Index.js changed */


import React, { Component } from 'react';
import Notes from './Notes';
import '../styles/App.css';
import Createnotes from './Createnotes';
import NoteDetail from './NoteDetail';

class App extends Component {
  state = {
    notes: [
    {
      id:1,
      title : 'Bus-Note',
      paragraph: 'A bus is a road vehicle designed to carry many passengers. Buses can have a capacity as high as 300 passengers',
    },
    {
      id:2,
      title : 'Train-Note',
      paragraph: 'A train is a form of rail transport consisting of a series of connected vehicles that usually runs along a rail track to transport cargo or passengers',
    },
    {
      id:3,
      title:'Ship-Note',
      paragraph: 'A ship is a large watercraft that travels the worlds oceans and other sufficiently deep waterways, carrying passengers or goods, or in support of specialized missions, such as defense, research and fishing.',
    },
    {
      id:4,
      title : 'Bus-Note',
      paragraph: 'A bus is a road vehicle designed to carry many passengers. Buses can have a capacity as high as 300 passengers',
    },
    {
      id:5,
      title : 'Train-Note',
      paragraph: 'A train is a form of rail transport consisting of a series of connected vehicles that usually runs along a rail track to transport cargo or passengers',
    },
    {
      id:6,
      title:'Ship-Note',
      paragraph: 'A ship is a large watercraft that travels the worlds oceans and other sufficiently deep waterways, carrying passengers or goods, or in support of specialized missions, such as defense, research and fishing.',
    },
    {
      id:7,
      title : 'Bus-Note',
      paragraph: 'A bus is a road vehicle designed to carry many passengers. Buses can have a capacity as high as 300 passengers',
    },
    {
      id:8,
      title : 'Train-Note',
      paragraph: 'A train is a form of rail transport consisting of a series of connected vehicles that usually runs along a rail track to transport cargo or passengers',
    },
    {
      id:9,
      title:'Ship-Note',
      paragraph: 'A ship is a large watercraft that travels the worlds oceans and other sufficiently deep waterways, carrying passengers or goods, or in support of specialized missions, such as defense, research and fishing.',
    },
    ],
    showCreate: false,
    showNote: false,
  };
  
  //this.onButtonClick = this.onButtonClick.bind(this);
  // handleInputChange{

  // }
  handleCreateView=(e) => {
    this.setState({ showCreate: true });
  }
  handleListView=(e) => {
    this.setState({ showCreate: false });
  }
  showNoteView = (id) => {
        this.setState({
          showNote: true, 
          showCreate: false,
          noteId: id
        })
        const title = ''; // get and store title based on id; or get the whole object.
        const paragraph = ''; // get and store paragraph . planning to send as props at line 97 

    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <div className="button-col">
            <button onClick={this.handleListView}>View your notes</button>
            <button onClick={this.handleCreateView}>+ Create your notes</button>
          </div>
        </div>
        <div className="notes">

          <h2 className="notes-title" > Your Notes: </h2>

          <div className="notes-container">
          <Notes notes={this.state.notes} showNote={this.showNoteView}/>
          
          { this.state.showCreate ? <Createnotes /> : null}

          { this.state.showNote ? <NoteDetail note={/* planning to pass title and paragraph based on id */}/> : null }
          </div>

        </div>
      </div>
    );
        
  }
}

export default App;
