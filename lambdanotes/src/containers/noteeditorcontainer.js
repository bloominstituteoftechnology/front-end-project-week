import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postNote, getNotes, putNote } from '../store/actions/'

import { NoteEditor } from '../components/NoteEditor/';

class NoteEditorContainer extends Component {
    componentDidMount() {
        this.props.getNotes();
    };

    render() {
        return (
            <NoteEditor 
                {...this.props}
                tmpNote={this.props.editing.tmpNote}
                isEditing={this.props.editing.isEditing}
                postNote={this.props.postNote}
                getNotes={this.props.getNotes}
                putNote={this.props.putNote}
            />
        );
    }
};

NoteEditorContainer.propTypes = {
    editing: PropTypes.shape({
        isEditing: PropTypes.bool,
		tmpNote: PropTypes.shape({
            tags: PropTypes.arrayOf(PropTypes.string),
			title: PropTypes.string,
			textBody: PropTypes.string,
			_id: PropTypes.string,
			__v: PropTypes.number
        })
    }),
    postNote: PropTypes.func,
    getNotes: PropTypes.func,
    putNote: PropTypes.func
};

const mapStateToProps = (state) => {
    return {

        editing: state.notesReducers.editing
    };
};

export default connect(mapStateToProps, { postNote, getNotes, putNote })(NoteEditorContainer);
