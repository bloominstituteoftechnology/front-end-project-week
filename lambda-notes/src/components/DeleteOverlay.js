import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  background: #9da7b1;
  height: 100vh;
  width: 117vh;
  position: fixed;
  opacity: 0.95;
  overflow: hidden;
  /* display: none; */
  z-index: 10;
`

const DeleteDialog = styled.div`
  top:22%;
  left:32%;
  background-color:white;
  position: fixed;
  height:23%;
  width:35%;
  z-index: 20;
  border: 1px solid #979797;
`
const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding:7%;
`

const BaseButton = styled.button`
  background-color: #2BC1C4;
  border: 1px solid #979797;
  height: 40px;
  color: white;
  text-align:center;
  width:36%;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-left:4%;
  &:hover{
    cursor: pointer;
  }
`

const DelButton = styled.button`
  background-color: #CA001A;
  border: 1px solid #979797;
  height: 40px;
  color: white;
  text-align:center;
  width:35.5%;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  margin-left:14%;
  &:hover{
    cursor: pointer;
  }
`

const DeleteOverlay = (props) => {
  return (
    <div>
      <Overlay />
      <DeleteDialog> 
        <Title>Are you sure you want to delete this?</Title>
        
        <DelButton onClick={props.deleteNoteClick}>Delete</DelButton>
        <BaseButton onClick={props.deletingCompleted}>No</BaseButton>
      </DeleteDialog>
    </div>
  );
};

export default DeleteOverlay;