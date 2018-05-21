import React, { Component } from 'react';
import axios from 'axios';

// components
import Note from './Note';

import data from '../../data.json';

class NoteView extends Component {
  state = {
    noteList: [],
  }

  componentDidMount() {
    this.setState({ noteList: data });
  }
  
  render() { 
    return ( 
      <div>
        {
          this.state.noteList.map(note => {
            return (
              <Note key={ note.id } title={ note.title } content={ note.content } />
            )
          })
        }
      </div>
    )
  }
}
 
export default NoteView;