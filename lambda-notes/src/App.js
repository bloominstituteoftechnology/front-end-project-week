import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import Note from './components/Note';
import AddNote from './components/AddNote';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Lorem Ipsum',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
      },
      {
        id: 1,
        title: 'Lorem Ipsum',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
      },
      {
        id: 2,
        title: 'Lorem Ipsum',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
      },
      {
        id: 3,
        title: 'Lorem Ipsum',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
      },
      {
        id: 4,
        title: 'Lorem Ipsum',
        textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
      },
    ],
    newTitle: '',
    newTextBody: ''
  }
  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  handleAddNote = event => {
    const notes = this.state.notes.slice();
    notes.push({id: this.state.notes.length, title: this.state.newTitle, textBody: this.state.newTextBody});
    this.setState({notes, newTitle: '', newTextBody: ''});
  }
  render() {
    return (
      <div className='app'>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='content'>
          <Route exact path='/' render={props => <Notes {...props} notes={this.state.notes} />}/>
          <Route path='/note/:id' render={props => <Note {...props} notes={this.state.notes} />} />
          <Route path='/add' render={props =>
            <AddNote {...props} notes={this.state.notes} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} newTitle={this.state.newTitle} newTextBody={this.state.newTextBody}/>
          } />
        </div>
      </div>
    );
  }
}

export default App;
