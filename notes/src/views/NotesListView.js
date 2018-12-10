import React from 'react';
import { connect } from 'react-redux';

import { getNotes } from '../actions';

import NotesList from '../components/NotesList';

class NotesListView extends React.Component {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <div>
                <NotesList {...this.props} />
            </div>
        );
    }
}

const mapStatetoProps = state => {
    console.log(state);
    return {
        notes: state.notes,
        fetchingNotes: state.fetchingNotes,
        error: state.error
    }
}

export default connect(mapStatetoProps, { getNotes })(NotesListView);