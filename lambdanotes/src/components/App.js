import React, { Component } from 'react';
import Notes from './Notes';
import '../styles/App.css';

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
    ],
  };
  
  // componentDidMount() {
  //    this.props.getfriends();
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <div className="button-col">
            <button>View your notes</button>
            <button>+ Create your notes</button>
          </div>
        </div>
        <div className="notes">
          <h2 className="notes-title" > Your Notes: </h2>
          <div className="notes-container">
            {this.state.notes.map(note => {
              console.log(note);
              return <Notes key={this.state.notes.id} note={note}/>
            })} 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
