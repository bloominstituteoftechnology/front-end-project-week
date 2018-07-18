import React from "react";
import styled from 'styled-components';

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


 const CreateNote = () => (
     <Createcont>
         <div>Create New Note:</div>
         <Createbod>
 
        <Notetitle
        //   className="input"
        //   value={this.state.notetitle}
        //   name="notetitle"
           type="text"
           placeholder="Note Title"
        //   onChange={this.handleInputChange}
        />
        <Notecontent
        //   className="input"
        //   value={this.state.notebody}
        //   name="notebody"
           type="text"
           placeholder="Note Content"
        //   onChange={this.handleInputChange}
        />
        <Button onClick={() => this.handleAddNote()} type="button">
          Save
        </Button>
      
      </Createbod>
     </Createcont>
 )
 ;

export default CreateNote