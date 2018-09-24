import React from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../actions';

import NotesList from '../components/NotesList';

class NotesListView extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return (
            <NotesList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps, { fetchNotes })(NotesListView);