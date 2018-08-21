import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';
import { CSVLink, CSVDownload } from 'react-csv';

class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="notesOuterDiv">
                <input type="text" name="searchText" onChange={this.props.filter} placeholder="Search titles and text"/>
                <h2 className="notesListTitle">Your Notes:</h2>
                <div className="notesInnerDiv">
                {this.props.notes.map(note => <Link to={`/notes/${note._id}`}><Note note={note} key={note._id} /></Link>)}
                </div>
                <div className="CSV"><CSVLink data={this.props.notes}>Download CSV of Notes</CSVLink></div>
            </div>
        )
    }
}

export default NotesList;