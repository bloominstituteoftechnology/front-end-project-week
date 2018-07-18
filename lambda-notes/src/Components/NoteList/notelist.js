import React, { Component } from 'react';
import SideBar from '../Sidebar/sidebar';
import "./notelist.css";
import Note from './note';
import {connect} from 'react-redux';
class NoteList extends Component {

    render() {
        return (
            <div className="page-container">
                <SideBar />
                <div className="section-container">
                    <h1 className="notes-title"> Your Notes: </h1>
                    <div className="note-container">
                    {this.props.notes.map(note => <Note key={note.id} note={note}/>)}
                      </div>
                  </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes: state.notes
    }
}

export default connect (mapStateToProps) (NoteList);