import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../actions';

import NotesList from '../components/NotesList';

class NotesListView extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return (
            <Fragment>
                <div className="notes-list-header">
            <h1>Your Notes:</h1>
            </div>
            <NotesList {...this.props} notes={this.props.notes} />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps, { fetchNotes })(NotesListView);