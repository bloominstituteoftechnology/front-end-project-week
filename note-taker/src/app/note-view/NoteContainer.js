import { connect } from 'react-redux';
import NoteComponent from './NoteComponent';
import { noteViewOperations } from './duck';
import { homeOperations } from '../home/duck';

const mapStateToProps = (state) => {
    const { note } = state.noteView;
    return {
        note
    }
}
const mapDispatchToProps = (dispatch) => {
    const fetchNote = (id) => dispatch(noteViewOperations.fetchNote(id));
    const noteDeletion = (id) => dispatch(noteViewOperations.noteDeletion(id));
    const fetchAllNotes = () => dispatch(homeOperations.fetchNotes());
    return {
        fetchNote,
        fetchAllNotes,
        noteDeletion,
    }
}

const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NoteComponent);

export default NoteContainer;