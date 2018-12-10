import React, { useState } from 'react';
import { NoteContainer, NoteTitle, NoteBody, CheckContainer } from '../../styles';

const NoteSelect = ({ note, noteChecked, noteUnChecked }) => {

    const [checked, setChecked] = useState(false);

    return (
        <NoteContainer
            onClick={e => {
                e.preventDefault();
                setChecked(!checked);
                !checked ? noteChecked(note.id) : noteUnChecked(note.id)
            }}
            checked={checked}
        >
            <CheckContainer>
                <input
                    type="checkbox" 
                    checked={checked}
                    onChange={e => {
                        e.preventDefault();
                        setChecked(!checked);
                        !checked ? noteChecked(note.id) : noteUnChecked(note.id)
                    }}
                />
                {
                    checked
                    ? <i className="far fa-check-square"></i>
                    : <i className="far fa-square"></i>
                }
            </CheckContainer>

            <NoteTitle >{note.title}</NoteTitle>
            <NoteBody markdown={note.textBody}/>
        </NoteContainer>
    );
}

export default NoteSelect;