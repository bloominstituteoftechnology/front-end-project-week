import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from '../Note/Note';
import './NotesContainer.css';

class NotesContainer extends Component {

  
    render() {
        //  console.log(this.props)

        let notesArr = [];
        for (let i = this.props.notes.length -1; i >= 0; i--) {
            notesArr.push(this.props.notes[i])
        } /*looping backwards and pushing into empty array to display 
            notes with most recent added/edited note on top of list-view */

        return (

            <div className="notes-container">

                <div className="your-notes">Your Notes:</div>
                
                {/* {this.props.notes.map(note => <Note key={note.id} note={note}/>)} */}
                
                {notesArr.map(note => <Note key={note.id} note={note}/>)} 

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