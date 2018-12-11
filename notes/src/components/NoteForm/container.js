import { connect } from 'react-redux';
import NoteForm from './NoteForm';


import { deleteChecked, addNote } from '../../actions';


const mapStateToProps = state => {
    const { checkedNotes, selectMode } = state.notes;
    return {
        checkedNotes,
        selectMode
    };
}

const mapDispatchToProps = {
    deleteChecked,
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
