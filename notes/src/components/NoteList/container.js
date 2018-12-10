import { connect } from 'react-redux';
import NoteList from './NoteList';
import { withRouter } from 'react-router-dom';

import { noteChecked, noteUnChecked } from '../../actions'

const mapStateToProps = state => {
    const {
        notes,
        noteChecked, 
        noteUnChecked,
        fetchingNote,
        fetchingNotes,
        addingNote,
        updatingNote,
        deletingNote,
        searchValue,
        sortMode,
    } = state;
    return {
        notes,
        noteChecked, 
        noteUnChecked, 
        fetchingNote,
        fetchingNotes,
        addingNote,
        updatingNote,
        deletingNote,
        searchValue,
        sortMode
    };
}

const mapDispatchToProps = {
    noteChecked,
    noteUnChecked
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteList));

