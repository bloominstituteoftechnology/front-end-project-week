import React, { Component } from 'react';
import "../css/note.css"
import Note2 from './note2'
import { getNotes } from '../actions/notesActions'; // api get all notes
import { viewNote } from '../actions/notesActions'; // api get single note
import { viewList } from '../actions/listsActions'; // api get single list
import { connect } from 'react-redux';
import { CSVLink } from "react-csv";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNotes: [],
            listReady: false
        };
    }

    render() {
        return (
            <form className="note-list"><div className="title-container"><div className="list-title">List of Notes:</div>
                <div className="csv-button"><CSVLink data={this.props.notes}>Export to .csv</CSVLink></div></div>
                <div className="list-container">
                    {this.props.selectedNotes.map((note, index) => {
                        return <Note2 key={index} title={note.title} viewNote={this.props.viewNote} textBody={note.textBody} id={note.id} noteView={this.props.noteView} notes={this.state.notes} />
                    })}
                </div>
            </form>
        );
    }
};

const mapStateToProps = state => {
    const { notesReducer } = state;
    const { listsReducer } = state;

    return {
        listSelected: state.singleListReducer.listSelected,
        notes: notesReducer.notes,
        lists: listsReducer.lists,
        error: listsReducer.error,
        noteSelected: state.singleNoteReducer.noteSelected
    };
};

export default connect(mapStateToProps, {
    getNotes, viewList, viewNote
})(ListView);
