import React from 'react'
import {NoteFormCont,TitleInput, TextInput,
FormTitle, NewNoteBtn, NewNoteButtonText,} from '../../Styles/NoteFormStyles'

const NoteForm = props => {
    const {title, textBody, tags} = props.noteObj;

    const handleClick = (ev) => {
        ev.preventDefault();
        if (props.isEditing) {
            props.editNote();
        } else {
            props.addNote();
        }
    }
    
    return (
        
        <NoteFormCont>
        <FormTitle>Create New Note:</FormTitle>
        <TitleInput 
        placeholder="New Title"
        type="text"
        name="title"
        onChange={props.changeHandler}
        value={title}
        />
        <TextInput 
        placeholder="New Content"
        type="text"
        name="textBody"
        onChange={props.changeHandler}
        value={textBody}
        />
        <TitleInput 
        placeholder="tags"
        type="text"
        name="tags"
        onChange={props.changeHandler}
        value={tags}
        />
        <NewNoteBtn onClick={ev => {handleClick(ev); props.history.push('/home') }}><NewNoteButtonText>{props.isEditing ? 'Update' : 'Save'}</NewNoteButtonText> </NewNoteBtn>
        </NoteFormCont>
        
    )
}

export default NoteForm;