import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes } from '../store/actions';

import NoteContainer from '../components/NoteComponents/NoteContainer';

class NoteListView extends Component {
    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <NoteContainer
              notes={this.props.filtered ? this.props.filteredNotes : this.props.notes} />
        );
    }
};

const mapStateToProps = state => ({
    notes: state.notes,
    filtered: state.filtered,
    filteredNotes: state.filteredNotes,
});

export default connect(mapStateToProps, { getNotes })(NoteListView);