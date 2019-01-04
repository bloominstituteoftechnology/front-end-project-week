// *** === Imports === *** //
// React
import React from 'react';

// React Router
import {
    Link
} from 'react-router-dom';

// Styles
import {
    Logo,
    NotesContainer,
    NoteTab,
    NoteTabTitle
} from '../styles';

// *** === Functional Component === ***
const Notes = props => {
    return (
        <div className='notes-container'>
            <Logo>All Notes</Logo>

            <NotesContainer>
                {props.notes.map((n, i) => {
                    return (
                        <NoteTab key={i} onClick={() => props.history.push(`/note/${n._id}`)}>
                            <NoteTabTitle>
                                {n.title}
                            </NoteTabTitle> 
                            {n.textBody}
                        </NoteTab>
                    )
                })} 
            </NotesContainer>

            
        </div>
    )
}

// *** === Default Export === *** //
export default Notes;