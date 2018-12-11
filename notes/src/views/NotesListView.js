import React from 'react';
import { connect } from 'react-redux';

import { getNotes, deleteNote} from '../actions';

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

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { getNotes, deleteNote})(NotesListView);