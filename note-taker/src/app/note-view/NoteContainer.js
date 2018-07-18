import { connect } from 'react-redux';
import NoteComponent from './NoteComponent';
import { noteViewOperations } from './duck';


const mapStateToProps = (state) => {
    const { note } = state.noteView;
    return {
        note
    }
}
const mapDispatchToProps = (dispatch) => {
    const fetchNote = (id) => dispatch(noteViewOperations.fetchNote(id));
    return {
        fetchNote
    }
}

const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NoteComponent);

export default NoteContainer;