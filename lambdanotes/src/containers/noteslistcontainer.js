import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../store/actions/';

import { NotesList } from '../components/NotesList/';

class NotesListContainer extends Component {
    componentDidMount() {
        this.props.getNotes();
    };

    render() {
        return (
            <NotesList {...this.props} notes={this.props.notes} status={this.props.status} />
        );
    }
};

NotesListContainer.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        textBody: PropTypes.string,
        _id: PropTypes.string,
        __v: PropTypes.number
    })).isRequired,
    status: PropTypes.shape({
        postingNote: PropTypes.bool,
		postedNote: PropTypes.bool,
		gettingNotes: PropTypes.bool,
        gotNotes: PropTypes.bool,
        gettingSingleNote: PropTypes.bool,
        gotSingleNote: PropTypes.bool,
		puttingNote: PropTypes.bool,
		putNote: PropTypes.bool,
		deletePrompt: PropTypes.bool,
		deletingNote: PropTypes.bool,
        deletedNote: PropTypes.bool,
        noteMessage: PropTypes.string,
		noteError: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state) => {
    return {
        notes: state.notesReducers.notes,
        status: state.notesReducers.status
    };
};

export default connect(mapStateToProps, { getNotes })(NotesListContainer);
