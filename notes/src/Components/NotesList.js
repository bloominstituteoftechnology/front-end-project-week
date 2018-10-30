import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';




// const NotesContainer = styled.div`
//   border: 1px solid black;
//   margin-left: 300px;
//   margin-top: -610px;
// `;

// const Heading = styled.h2`
//   display: flex;
//   margin-left: 30px;
// `;

// const NotesDisplay = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

// const NoteCard = styled.div`
//   border: 1px solid gray;
//   width: 225px;
//   height: 200px;
//   margin-left: 60px;
//   margin-top: 30px;
// `;

// const NoteTitle = styled.h3`
//   border-bottom: 1px solid gray;
//   display: flex;
//   margin-left: 10px;
//   margin-right: 10px;
//   text-decoration: none;
//   color: black;
// `;

// const NoteBody = styled.p`
//   display: flex;
//   margin-left: 10px;
//   margin-right: 10px;
//   text-decoration: none;
//   color: gray;
// `;


function NotesList (props) {
    return (
        <div>
            {props.notes.map(note => 
                (<NavLink key={note.id} to={`/${note.id}`}>
                    <div className='note-card'>
                    <h3 onClick={() => props.history.push(`/${note.id}`)}>{note.title}</h3>
                    <p>{note.textbody}</p>
                    </div>
                </NavLink>)
            )}
        </div> 
    )
    
} 

export default NotesList;
