import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, } from 'react-router-dom';
import NoteView from './NoteView';
import {getNotes} from '../actions';

class NotesList extends Component {

    componentDidMount() {
        this.props.getNotes();
    }
// causes infinite loop
    // componentDidUpdate() {
    //     this.props.getNotes();
    // }

    notes = this.props.notes;
    render() {
        return (
            <div className='notes-container'>
                <h1>
                    My Notes:
                </h1>
                <div className='notes-list'>
                    {this.props.notes.map(note => (
                        <Link key={note.id} to={`/notes/${note.id}`}>
                            <Note key={note.id} note={note} />
                        </Link>
                    ))}
                </div>
                {/* <Route 
                    path='/notes/:id' 
                    render={() => (
                        <NoteView {...this.props} notes={this.state.notes} getNotes={this.getNotes} />
                    )}
                /> */}
            </div>
        );
    }
}

// export default NotesList;

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
}

export default connect(
    mapStateToProps, { getNotes }
)(NotesList);

