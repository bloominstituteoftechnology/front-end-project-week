import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from '../Note/Note';
import './NotesContainer.css';

class NotesContainer extends Component {

  
 render() {
     console.log(this.props)
     return (
         <div className="notes-container">
            {this.props.notes.map(note => <Note key={note.id} note={note}/>)}
        </div>
     )
 }
}


const mapStateToProps = state => {
    
    return {
        notes: state.notes
    }
   
}

export default connect(mapStateToProps)(NotesContainer);