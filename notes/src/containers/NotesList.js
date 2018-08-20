import React from 'react';
import NoteCard from '../components/NoteCard';
import { getAllNotes } from '../actions';
import { connect } from 'http2';


class NotesList extends React.Component {
    onComponentDidMount(){
        // this.props.getAllNotes();
    }
    render(){
        return(
            <div className="NotesList">
                <h2>Your Notes:</h2>
                {this.props.notes.map(note=> <NoteCard key={note.id} params={note} />)}
            </div>
        )
    }
}

const mapStateToProps= (state)=> {
    return(
        {
            getAllNotes: state.loadReducer.getAllNotes,
            notes: state.loadReducer.notes
        }
    )
}

export default connect(mapStateToProps, { getAllNotes })(NotesList);