import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
      { id: 0, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 1, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 2, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 3, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 4, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 5, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 6, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 7, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' },
      { id: 8, title: 'Note Title', content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficutur mollis ...' }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* SideBar always visible */}
        <SideBar />
        {/* Routes based on SideBar navigations or main-view navigations - note, edit, delete */}
        {/* main-view with all notes */}
        <Route exact path='/' render={props => ( <Notes {...props} notes={this.state.notes} /> )} />
        {/* main-view with specific note */}
        <Route exact path='/note/:id' render={props => ( <Note {...props} notes={this.state.notes} /> )} />
        {/* main-view create note goes here, class component */}
      </div>
    );
  }
}

export default App;
