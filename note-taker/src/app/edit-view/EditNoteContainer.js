import { connect } from 'react-redux';
import EditNoteComponent from './EditNoteComponent';
import { noteViewOperations } from '../note-view/duck';
const mapStateToProps = (state) => {
    const { title, textBody } = state.noteView.note;
    return {
        title,
        textBody
    }
}
const mapDispatchToProps = (dispatch) => {
    const fetchNote = (id) => dispatch(noteViewOperations.fetchNote(id));

    return {
        fetchNote
    }
}
const EditNoteContainer = connect(mapStateToProps, mapDispatchToProps)(EditNoteComponent);

export default EditNoteContainer;