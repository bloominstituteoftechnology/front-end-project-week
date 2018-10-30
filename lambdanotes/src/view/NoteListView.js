import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabbingNotes } from '../store/actions';
import NotesList from '../components/NotesList';

class NoteListView extends Component {
    componentDidMount() {
        this.state.grabbingNotes();
    }
    render() {
        return (
            <NotesList {...this.state} />
        );
    }
}

const mapStateToProps = state => ({ notesList: state.notes });

export default connect(mapStateToProps, { grabbingNotes })(NoteListView);