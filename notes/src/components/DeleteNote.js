import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
background-color: hsla(0, 0%, 89%, .9);
position: absolute;
z-index: 5;
max-width: 100vw;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
margin-top: 100px;


`

const ModalBox  = styled.div`
background-color: white;
display: flex;
flex-wrap: wrap;
height: 200px;
border: 1px solid grey;
border-radius: 3px;
padding: 10px;
margin: 0 auto;
justify-content: space-around;
h2 {
    font-size: 10px;
}

`

const Buttons = styled.div`
  background-color: #5eb3bb;
  height: 40px;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  align-self: center;
  align-items: center;
  border-radius: 2px;
  width: 240px;
  a {
    text-decoration: none;
    color: white;
  }
  .red {
      background-color: red;
      margin-right: 10px;
`;

const Button = styled.div`
  background-color: #5eb3bb;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  align-self: center;
  align-items: center;
  border-radius: 2px;
  width: 200px;
  
  }
  a {
    text-decoration: none;
    color: white;
  }
`;



const DeleteNote = (props) => {
    return ( 
        <StyledContainer>
        <ModalBox>
        <h2>Are you sure you want to delete this?</h2>
        <div>
        <Buttons>
        <Button className='red' >Delete
        </Button>
        <Button>No</Button>
        </Buttons>
        
        </div>
        </ModalBox>
        
        </StyledContainer>
     );
}
 
export default DeleteNote;