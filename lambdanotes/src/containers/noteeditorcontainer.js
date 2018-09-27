import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNote, getNotes, putNote } from '../store/actions/'

import { NoteEditor } from '../components/NoteEditor/';

class NoteEditorContainer extends Component {
    render() {
        return (
            <NoteEditor 
                {...this.props}
                tmpNote={this.props.tmpNote}
                isEditing={this.props.isEditing}
                postNote={this.props.postNote}
                getNotes={this.props.getNotes}
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
    getNotes: PropTypes.func,
    putNote: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        isEditing: state.notesReducers.editing.isEditing,
        tmpNote: {
            ...state.notesReducers.editing.tmpNote,
            tags: state.notesReducers.editing.tmpNote.tags.join() // Makes working with the tags in the form easier. Eventually gets reconstituted to an array in the submitHandler in NoteEditor.
        }
    };
};

export default connect(mapStateToProps, { postNote, getNotes, putNote })(NoteEditorContainer);
