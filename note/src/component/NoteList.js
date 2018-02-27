import React, {Component} from 'react';
import Note from './Note'
import '../App.css';

class NoteList extends Component {
    render() {
        return (
            <div className='Note-List'>
                {this.props.notes.map((note, i) => <Note note={note} />)}
            </div>
        );
    }
  }
  
  export default NoteList;