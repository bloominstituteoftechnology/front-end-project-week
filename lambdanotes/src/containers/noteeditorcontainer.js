import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNote, isEditingNote, clearNoteView, putNote } from '../store/actions/'

import { NoteEditor } from '../components/NoteEditor/';

class NoteEditorContainer extends Component {
    render() {
        return (
            <NoteEditor 
                {...this.props}
                tmpNote={this.props.tmpNote}
                isEditing={this.props.isEditing}
                postNote={this.props.postNote}
                putNote={this.props.putNote}
            />
        );
    }
};

NoteEditorContainer.propTypes = {
    isEditing: PropTypes.bool,
    tmpNote: PropTypes.shape({
        tags: PropTypes.string,
        title: PropTypes.string,
        textBody: PropTypes.string,
        _id: PropTypes.string,
        __v: PropTypes.number
    }),
    postNote: PropTypes.func,
    putNote: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        isEditing: state.notesReducers.status.isEditing,
        tmpNote: {
            ...state.notesReducers.noteViewer,
            // join() makes working with the tags in the form easier. Eventually gets reconstituted to an array in the submitHandler in NoteEditor.
            tags: state.notesReducers.noteViewer.tags.join()
        }
    };
};

export default connect(mapStateToProps, { postNote, isEditingNote, clearNoteView, putNote })(NoteEditorContainer);
