import React, {useEffect, useState} from 'react';


import { 
    ButtonsContainer, 
    StyledButton, 
    NoteModuleContainer, 
    NoteModuleInput, 
    NoteModuleTextArea,  
    NoteModuleForm,
    CloseIcon
} from '../styles';

import DeleteConfirm from './DeleteConfirm';

const NoteModule = ({
    note, 
    getNote,
    deleteNote,
    updateNote,
    activeNoteHandler,
    history, 
    match
}) => {

    const [gotNote, setGotNote] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        if(gotNote) return;

        const { id } = match.params;
        getNote(id);
        setGotNote(true);
    });
    return (
        <NoteModuleContainer>
            <NoteModuleForm onSubmit={e => {
                updateNote(note);
                history.push('/');
            }}>
                <CloseIcon onClick={e => {e.preventDefault(); history.push('/');}}><i className="fas fa-times"></i></CloseIcon>
                <NoteModuleInput type="text" name="title" value={note.title} onChange={activeNoteHandler}/>
                <NoteModuleTextArea type="text" name="textBody" value={note.textBody} onChange={activeNoteHandler}/>
                <ButtonsContainer display={true}>
                    <StyledButton type="button" onClick={e => {
                        e.preventDefault();
                        setShowDelete(true);
                    }}
                    >Delete</StyledButton>
                    <StyledButton type="submit" active="true">Save</StyledButton>
                </ButtonsContainer>
            </NoteModuleForm>

            {
                !showDelete ? null
                    : <DeleteConfirm 
                        setShowDelete={setShowDelete} 
                        deleteNote={deleteNote} 
                        history={history} 
                        id={note._id} 
                    />
            }
        </NoteModuleContainer>
    );
}

export default NoteModule;



