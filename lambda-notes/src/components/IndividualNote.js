import React from 'react';
import { connect } from 'react-redux';

import { deleteNote } from '../actions';

class IndividualNote extends React.Component {
    constructor(props){
        super(props);
    }

    deleteNote = event => {
        event.preventDefault();
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push('/');
    }
    
    render(){
        const note = this.props.notesData.find(note => `${note._id}` === this.props.match.params.id);
        if (!note) {
            return <h2>Note not found...</h2>
        }

        return(
            <div className='note-page'>
                <button onClick={() => this.props.history.push(`/edit-note/${note._id}`)}>Edit Note</button>
                <button onClick={this.deleteNote}>Delete Note</button>
                <h2 className='note-page-title'>{note.title}</h2>
                <p className='note-page-text'>{note.textBody}</p>
            </div>
        );
    }
}

export default connect(null, { deleteNote })(IndividualNote);