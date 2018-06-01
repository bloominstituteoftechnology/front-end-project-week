import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class NoteList extends Component {
  constructor() {
    super();
    this.state = {
      notesArray: [
        {
          _id: 'qazwsx',
          title: 'First Note',
          body: 'First lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175361
        },
        {
          _id: 'plmokn',
          title: 'Second Note',
          body: 'Second, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175370
        },
        {
          _id: 'ijnuhb',
          title: 'Third Note',
          body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175375
        },
        {
          _id: 'edcrfv',
          title: 'Forth Note',
          body: 'Third tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.',
          createdAt: 1527789175390
        },
      ]
    }
  }

  selectedNote = (note, index) => {
    return (
      <div className='note' key={note._id}>
        <Link to={`/note/${note._id}`}>        
          <h3 className='note-header'>{note.title}</h3>
        </Link>
        <hr />
        <p>{note.body}</p>
      </div>      
    )
  }

  render() {
    return (
      <div className='notelist-container'>
        <div className='content-header'><h2>Your Notes:</h2></div>
        <div className='noteList'>
          {this.state.notesArray.map(this.selectedNote)}          
        </div>
      </div>
    )
  }
};

export default NoteList;
