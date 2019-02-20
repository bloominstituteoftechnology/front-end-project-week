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
            selectedNotes: []
        };
    }

    componentDidMount() {
        this.props.viewList(this.props.id);                                         // api get the list from server
         const selectedNotes = [];                                                // setup array to hold notes 
           const newList = this.props.listSelected.list;   
console.log("newList:", newList)
            for (let i = 0; i < newList.length; i++) {                            // step through the array of note id's
               let singleNote = this.props.viewNote(newList[i]);                   // api get single note
               selectedNotes.push(singleNote);                                    // save each note into an array
           }
           this.setState({ selectedNotes: selectedNotes });                    // save it to state 
    }






    render() {


        return (
            <div className="note-list"><div className="title-container"><div className="list-title">List of Notes:</div>
                <div className="csv-button"><CSVLink data={this.props.notes}>Export to .csv</CSVLink></div></div>
                <div className="note-name">{this.props.listSelected.listTitle}</div>
                <div className="note-body">{this.props.listSelected.list}</div>
                <div className="list-container">
                    {this.state.selectedNotes.map((note, index) => {
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
        listSelected: state.singleListReducer.listSelected,
        notes: notesReducer.notes,
        lists: listsReducer.lists,
        error: listsReducer.error,
     //   gettingNotes: notesReducer.gettingNotes
    };
};

export default connect(mapStateToProps, {
    getNotes, viewList, viewNote
})(ListView);
