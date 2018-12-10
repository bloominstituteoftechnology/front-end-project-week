import { connect } from 'react-redux';
import NoteForm from './NoteForm';


import { deleteChecked, addNote } from '../../actions';


const mapStateToProps = state => {
    const { checkedNotes } = state;
    return {
        checkedNotes
    };
}

const mapDispatchToProps = {
    deleteChecked,
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
