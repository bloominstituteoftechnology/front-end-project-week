import React from 'react';
import '../App.css';
import Note from './Note';
import styled from 'styled-components';

const Section = styled.section`
    margin 5% 3%;
    font-size: 15px;
    text-align: left;
    width: 75%;
    text-decoration: none;
`

const NoteList = props => {
    return (
        <Section>
            <div className = 'page-header'>
                <h3>Your Notes:</h3>
            </div>
        
            <div className = 'note-list' >
                {props.notes.map(note => {
                    return(
                        <Note
                            id = {note._id}
                            key = {note._id}
                            tags = {note.tags}
                            title = {note.title} 
                            textBody = {note.textBody}
                        />
                    )
                })}
            </div>
        </Section>
    )
}

export default NoteList;