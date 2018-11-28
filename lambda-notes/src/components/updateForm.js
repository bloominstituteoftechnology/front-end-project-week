import React from 'react';
import { connect } from 'react-redux';

import NoteForm from './noteForm';

const UpdateForm = props =>{

    const note = props.notes.find(item =>{
        return item._id === props.match.params.id
    })
    return(
        <div>
            <NoteForm 
                purpose='Update Note:'
                title={note.title}
                text={note.textBody}
                update={true}
                id={note._id}
            />
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps)(UpdateForm);