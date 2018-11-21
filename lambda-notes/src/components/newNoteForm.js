import React from 'react';
import { connect } from 'react-redux';


import NoteForm from './noteForm';


const NewNoteForm = props =>{


        return(
            <div>
             <NoteForm 
                 purpose='New Note:'
                 tph='Note Title'
                 tbph='Input Note Here'
                 update={false}
             />
            </div>
        )
}
const mapStateToProps = ()=>{
    return {}
}

export default connect(mapStateToProps)(NewNoteForm); 