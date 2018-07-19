import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Note from './Note';

const Createcont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;
const Createbod = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin-left: 25px;
    
`;
const Notetitle = styled.input`
margin-top: 25px;
 width: 355px;
 height: 37px;
`;
const Notecontent = styled.input`
margin-top: 10px;
width: 600px;
height: 340px;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
`;
const Button = styled.button`
margin-top: 25px;
color: white;
display: flex;

justify-content: center;
align-items: center;
background-color: #2BC1C4;
width: 185px;
height: 35px;
`;
const StyledLink = styled(Link)`
text-decoration: none;
  color: white;
  
`
// const Notebod = styled.div`
// display: flex;
//     justify-content: space-around;
    
   
// `;
// const SmallNote = styled.div`

//     background-color: white;
//     height:190px;
//     width:190px;
//     border: solid 1px #979797
// `;


 const CreateNote = props => {
     return(
        <form>
     <Createcont>
         <div>Create New Note:</div>
         <Createbod>
             
        <Notetitle
        //   className="input"
        onChange={props.handleNoteChange}
        type="text"
        name="notetitle"
        value={props.notetitle}
        //   value={props.value}
           placeholder="Note Title"
           
        />
        <Notecontent
        //   className="input"
        onChange={props.handleNoteChange}
        type="text"
          name="notebod"
          value={props.notebod}
        //    value={props.value}
           placeholder="Note Content"
           
        />
        <Button  
        onClick={props.handleAddNote} ><StyledLink to="/">
          Save</StyledLink>
        </Button>
        
        
      
      </Createbod>
     </Createcont>
     </form>
     );
 };
 
<StyledLink to="/">View Your Notes</StyledLink> 
export default CreateNote;