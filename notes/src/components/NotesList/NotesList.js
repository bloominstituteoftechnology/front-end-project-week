import React from 'react';
import './NoteList.css';
import SingleNote from '../../views/SingleNote';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Note = styled.div`
    margin: 2% 1%;
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 200px;
    height: 200px;
    border: 1px solid gray;
    padding: .4% 1% 1% 1%;

    a{
        text-decoration: none;
        color: black;
        width: 100%;

        &:hover{
            text-decoration: none;
            color: black;
        }
    }

    h2{
        border-bottom: 1px solid black;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    button{
        display: none;
    }
`

function NotesList(props) {
    if(!props.notesList || !props.notesList.length) {
        return <h1>Make Your First Note!</h1>
    }
    
    return (
        <div className='note-container'>
            {props.notesList.map(note => (  
                <Note>
                   <NavLink to={`notes/${note.title}`} activeClassName='active'>      
                    <SingleNote key={note.title} noteId={note.title} {...props} note={note}/>      
                    </NavLink>  
                </Note> 
            ))}
        </div>
    );
}

export default NotesList;