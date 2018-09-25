import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import { Tags } from './Tags';


const NoteDiv = styled.div `
  width: 667.5px;
`;

export const Note = (props) => {
  return (
    <NoteDiv>
      <div>
        <button onClick={()=> {props.editStart(props.id)}}>Edit</button><button onClick={props.toggle}>Delete</button>
      </div>
      <Modal isOpen={props.modal} toggle={props.toggle} backdrop={props.modal}>
         <ModalHeader toggle={props.toggle}>Delete Note?</ModalHeader>
         <ModalBody>
           If you click "yes" this note will be permanently deleted.
         </ModalBody>
         <ModalFooter>
           <Button color="primary" onClick={() => {props.delete(props.id); props.history.push('/'); props.toggle}}>Yes</Button>{' '}
           <Button color="secondary" onClick={props.toggle}>Cancel</Button>
         </ModalFooter>
       </Modal>
      <h3>{props.note.title}</h3>
      <p>{props.note.note}</p>
      {props.note.tags !== null ? <Tags tags={props.note.tags} newTags={props.newTags} removeTag={props.removeTag} /> : null}
    </NoteDiv>
  )
}
