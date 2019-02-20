import React from 'react';
import '../App.css';
import NoteMenu from './NoteMenu';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    margin: 3% 3%;
`

export const SingleNote = props => {
    const note = props.notes.find(note => `${note._id}` === props.match.params.noteID);

    if (note === undefined) {
        return <h1>loading...</h1>
    }
    else {
        return  (
            <Section className = 'single-note'>
                <NoteMenu deleteNote = {props.deleteNote} editNote = {props.editNote} noteID = {props.match.params.noteID} props = {props}/>
                
                <div className = 'note-title-single'>
                    <h3>{note.title}</h3>
                </div>
            </Section> 
        )  
    }

}
