import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      notes: [
        {
          tags: [],
          _id: '',
          title: 'hey',
          textBody: 'klsj;ldfj'
        },
        {
          tags: [],
          _id: '',
          title: 'how',
          textBody: 'kjslkfdj'
        },
      {
        tags: [],
        _id: '',
        title: 'are',
        textBody: 'kjlkjslfkdj'
      },
      {
        tags: [],
        _id: '',
        title: 'you',
        textBody: 'l;kjsdflkja'
      },
      {
        tags: [],
        _id: '',
        title: 'whats',
        textBody: 'kjsdf;lkajsf'
      }

      ]
    }

  }
  
  render() {
    
    return (
      <div className="App">
      {this.state.notes.map(note =>  {
        return (
          <div className='notes'>
          <div>{note.title}</div>
          <div>{note.textBody}</div>
          </div>
          
          )})}
      </div>
    );
  }
}

export default App;
