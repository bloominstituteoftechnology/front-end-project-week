import { connect } from 'react-redux';
import CreateNoteComponent from './CreateNoteComponent';
import { createNewOperations } from './duck';

const mapStateToProps = state => {
    console.log(state);
    const { fetchingNotes } = state.createNew;
    return {
        fetchingNotes
    }
}

const mapDispatchToProps = dispatch => {
    console.log(createNewOperations);
    const postNote = (notesObj) => {
        dispatch(createNewOperations.postNote(notesObj));
    }
    return {
        postNote
    }
}
const CreateNoteContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNoteComponent);

export default CreateNoteContainer;