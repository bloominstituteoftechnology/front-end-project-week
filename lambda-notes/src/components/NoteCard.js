import React from "react";
import styled from 'styled-components';

const Notecont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;
const Notebod = styled.div`
display: flex;
    justify-content: space-around;
    
   
`;
const SmallNote = styled.div`

    background-color: white;
    height:190px;
    width:190px;
    border: solid 1px #979797
`;


 const NoteCard = () => (
     <Notecont>
      <div>Your Notes:</div>    
    <Notebod className = 'Note'>
    
    <SmallNote>
    <h2>Note Title</h2>
    <p>Lorem Ipsum</p>
      </SmallNote> 
    <SmallNote>
    <h2>Note Title</h2>
    <p>Lorem Ipsum</p>
      </SmallNote> 
      <SmallNote>
    <h2>Note Title</h2>
    <p>Lorem Ipsum</p>
      </SmallNote> 
 </Notebod>
 </Notecont>
 )
 ;

export default NoteCard