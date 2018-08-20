import React from 'react';
import { getAllNotes } from '../actions';
import { connect } from 'http2';


class NotesList extends React.Component {
    onComponentDidMount(){
        this.props.getAllNotes();
    }
    render(){
        <div className="NotesList">
            <h2>Your Notes:</h2>
            {this.props.notes.map(note=> <NoteCard key={note.id} params={note} />)}
        </div>
    }
}

const mapStateToProps= (state)=> {
    return(
        {
            getAllNotes: state.getAllNotes,
            notes: state.notes
        }
    )
}

export default connect(mapStateToProps, { getAllNotes })(NotesList);