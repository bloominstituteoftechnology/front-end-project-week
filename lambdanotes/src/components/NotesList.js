import React from 'react';
// import { connect } from 'react-redux';
// import {grabbingNotes} from '../../actions';


class NotesList extends React.Component {
    componentDidMount() {
        this.props.grabbingNotes();
    }
    render() {
        return (
            <div className="notesOverWrap">
                <h2>Your Notes</h2>
                <div className="noteWrap">
                    {this.props.notes.map(note => (
                        <div className="noteCard" key={note.id}>
                            <h2 onClick={() => this.props.history.push(`/notes/${note._id}`)}>{note.title}</h2>
                            <p>{note.textBody}</p>
                        </div>
                    ))};
                </div>
            </div>
        ); 
    }
}

 export default NotesList;
