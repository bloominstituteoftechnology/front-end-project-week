import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Note from './Note'

const StyledNoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledViewWrapper = styled.div`
display: flex;
flex-direction: column;
padding-left: 30px;
padding-right: 30px;
h2 {
    padding-top: 25px;
}
p {
     margin: 5px;
     max-width: 660px;
     line-height: 1.5;
}
`;

const NoteOptions = styled.div`
    color: black;
    margin-top: 10px;
    display:flex;
    justify-content: flex-end;
    margin-right: 80px;
    font-weight:bold;
    .edit {
        margin-right: 20px;
    }

`


const SingleView = (props) => {
    const note = props.notes.find(note => note.id.toString() === props.match.params.id) 
    return ( 
        // I THINK I NEED A FILTER IN ORDER TO GET THE DATA
        // OF THE NOTE THAT IS AT A SPECIFIC ROUTE

        <StyledViewWrapper>
        <NoteOptions>  
        <Link className='edit noDecoration' to={`/edit/${note.id}`}>Edit</Link>
        <Link className='delete noDecoration' to={`/note/${note.id}/delete`}>Delete</Link>
         </NoteOptions>

        <StyledNoteContainer>

        <h2>{note.title}</h2>
        {/* <h5>{note.tags}</h5> */}
        <p>{note.body}</p>
        </StyledNoteContainer>
      </StyledViewWrapper>

     );
}
 
export default SingleView;