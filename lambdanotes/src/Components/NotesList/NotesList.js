import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class NotesList extends React.Component {
    constructor() {
        super()
        this.state = {
             notesArray: [
                 {
                     _id: 'ddddd1244444',
                     title: 'First Note',
                     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                 },


                 {
                    _id: 'ddhhdd12444554',
                    title: 'Second Note',
                    body: 'Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                },

                {
                    _id: 'ddfffdd128884554',
                    title: 'Third Note',
                    body: 'Consectetur lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                },


             ]
        }
    }
    
    showCurrentNotes = (note, index) => {
     return (
      <Link to={`/note/${note._id}`} className='note-link'>
        <div className='note' key={note._id}>
        <div>
            <h4>{note.title}</h4>
            <hr></hr>
            <p>{note.body}</p>
       </div>
       </div>
    </Link>
     )
    }

    
    
    render() {
      
        return (
         <div className='notes-container'>
            <div>
                <h3 className='content-header'>Your Notes:
                </h3>
            </div>
          <div className='noteslist'>
             {this.state.notesArray.map(this.showCurrentNotes)}
          </div>
        </div>
        );
    }
}

export default NotesList;