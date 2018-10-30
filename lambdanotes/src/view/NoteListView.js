import React from 'react';
import { connect } from 'react-redux';
import { grabbingNotes } from '../store/actions';
import NotesList from '../components/NotesList';

class NoteListView extends React.Component {
    componentDidMount() {
        this.props.grabbingNotes();
    }
    render() {
        return (
            <NotesList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({ notesList: state.notes });

export default connect(mapStateToProps, { grabbingNotes })(NoteListView);