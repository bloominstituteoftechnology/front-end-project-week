import React, {Component} from 'react';
import Note from '../Note/Note.js'
import './YourNotes.css';

class YourNotes extends Component {
    constructor(props) {
        super(props);
        this.state={
          notes:[{
              title:'Note Title',
              content:'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …'
          }],
        };
      }
    render() {
        return (
            <div className='note-list'>
                <h1>Your Notes:</h1>
                {this.state.notes.map(note =>{
                    return (
                        <Note
                            title={note.title}
                            key={note.id}
                            content={note.content}
                        />
                    );
                })}
            </div>
        );
    }
}

// YourNotes.defaultProps ={
//     notes:[]
// };

export default YourNotes;