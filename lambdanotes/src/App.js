import React, { Component } from 'react';
import NoteContainer from './Note-Container';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { title: 'test',
      content: 'test'}
      ],
      visible: true
    }
  }
  render() {
    return (
      <div className="App">
        <div className='Left-bar'>
          <h1>Lambda Notes</h1>
          <div>View Notes</div>  
          <div>
            <h5>Create New Note+</h5>
            <form>
              <input type='text' placeholder='Title'></input>
              <input type='text' placeholder='Content'></input>
              <button type='submit'>Save</button> 
            </form>  
          </div>  
        </div>
        <NoteContainer notes={this.state.notes} className='Note-container' />    
      </div>
    );
  }
}

export default App;
