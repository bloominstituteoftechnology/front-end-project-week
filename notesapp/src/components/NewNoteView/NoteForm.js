import React from 'react'
import {NoteFormCont,TitleInput, TextInput,
FormTitle, NewNoteBtn, NewNoteButtonText} from '../../Styles/NoteFormStyles'

const NoteForm = props => {
    const {title, textBody} = props.noteObj;
    const routeFromNewNote = ev => {
        ev.preventDefault()
        props.addNote()
        props.history.push('/home')
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
        <NewNoteBtn onClick={ev => routeFromNewNote(ev)}><NewNoteButtonText>Save</NewNoteButtonText> </NewNoteBtn>

        </NoteFormCont>
        
    )
}

export default NoteForm;