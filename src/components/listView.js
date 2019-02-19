import React, { Component } from 'react';
import "../css/note.css"
import Note from './note'
import { getNotes } from '../actions/notesActions'; // api get all notes
import { viewNote } from '../actions/notesActions'; // api get single note
import { viewList } from '../actions/listsActions'; // api get single list
import { connect } from 'react-redux';
import { CSVLink } from "react-csv";

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            list: [],
            tags: '',
            title: '',
            textBody: '',
            id: '',
            listItems: [],
        };
    }

    async componentDidMount() {
        const notes = [];                                              // setup array to hold notes 
    
        const list = await this.props.viewList(this.props.id);         // api get the list from server
        console.log("list:", list)
        const newList = await JSON.parse(list.list);                   // parse the string back into an array

        for (let i = 0; i < newList.length; i++) {                     // step through the array of note id's
            let singleNote = await this.props.viewNote(newList[i]);    // api get single note
            notes.push(singleNote);                                    // save each note into an array
        }
        this.setState({ notes: notes });                               // save the array to state
       // this.props.getNotes();                                       // api get notes 
    }


    render() {
        return (
            <div className="note-list"><div className="title-container"><div className="list-title">Notes:</div>
                <div className="csv-button"><CSVLink data={this.props.notes}>Export to .csv</CSVLink></div></div>
                <div className="list-container">
                    {this.state.notes.map((note, index) => {
                        return <Note key={index} title={note.title} viewNote={this.props.viewNote} textBody={note.textBody} id={note.id} noteView={this.props.noteView} notes={this.state.notes} />
                    })}
                </div>
            </div>
        );
    }
};
const mapStateToProps = state => {
    const { notesReducer } = state;
    const { listsReducer } = state;
    const { singleListReducer } = state;
    return {
        listSelected: singleListReducer.listSelected,
        notes: notesReducer.notes,
        lists: listsReducer.list,
        error: notesReducer.error,
        gettingNotes: notesReducer.gettingNotes
    };
};

export default connect(mapStateToProps, {
    getNotes, viewList, viewNote
})(ListView);
