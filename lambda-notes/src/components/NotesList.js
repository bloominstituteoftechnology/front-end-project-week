import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Note from './Note';
import Sidebar from './Sidebar';

import './Note.css';

const NotesList = props => {
    return (
        <div className="page-container">
            <Sidebar />
            <div className="section-container">
                <h1 className="notes-title">Your Notes:</h1>
                <div className="note-container">
                    {props.notes.map(note => {
                        return (
                            <div className="note">
                                <Note
                                    note={note}
                                    key={note.id}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      notes: state.notes
    }
  }

NotesList.propTypes = {
    notes: PropTypes.array,
    history: PropTypes.shape({
        push: PropTypes.func
    })
};

export default connect(mapStateToProps, {})(NotesList);