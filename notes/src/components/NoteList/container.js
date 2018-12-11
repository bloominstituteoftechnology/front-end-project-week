import { connect } from 'react-redux';
import NoteList from './NoteList';
import { withRouter } from 'react-router-dom';

import { noteChecked, noteUnChecked } from '../../actions'

const mapStateToProps = state => {
    const {
        notes,
        noteChecked, 
        noteUnChecked,
        loading,
        searchValue,
        sortMode,
        selectMode
    } = state.notes;
    return {
        notes,
        noteChecked, 
        noteUnChecked, 
        loading,
        searchValue,
        sortMode,
        selectMode
    };
}

const mapDispatchToProps = {
    noteChecked,
    noteUnChecked
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteList));

