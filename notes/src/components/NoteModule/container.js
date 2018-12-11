import { connect } from 'react-redux';
import NoteModule from './NoteModule';

import { getNote, updateNote, activeNoteHandler, deleteNote } from '../../actions';


const mapStateToProps = state => {
    const { activeNote } = state.notes;
    return {
        activeNote
    }
}

const mapDispatchToProps = {
    getNote, 
    updateNote, 
    activeNoteHandler,
    deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteModule);
