import { connect } from 'react-redux';
import EditNoteComponent from './EditNoteComponent';
import { noteViewOperations } from '../note-view/duck';
import { editViewOperations } from './duck';
const mapStateToProps = (state) => {
    const { title, textBody } = state.noteView.note;
    console.log(state);
    return {
        title,
        textBody
    }
}
const mapDispatchToProps = (dispatch) => {
    const fetchNote = (id) => dispatch(noteViewOperations.fetchNote(id));
    const updateNote = (id, noteObj) => dispatch(editViewOperations.updateNote(id, noteObj));
    return {
        fetchNote,
        updateNote
    }
}
const EditNoteContainer = connect(mapStateToProps, mapDispatchToProps)(EditNoteComponent);

export default EditNoteContainer;