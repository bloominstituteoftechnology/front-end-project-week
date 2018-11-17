import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  overflow-wrap: break-word;
  min-width: 500px;
  width: 66vw;
  max-width: 880px;
`;

const NoteContainer = styled.div`
    padding: 0px 25px;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 20px;
`;

const ActionButton = styled.div`
    text-decoration: underline;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
`;

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(114, 114, 114, 0.75);
`;

const DeleteModal = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    border: 3px solid rgb(187, 187, 187);
    background: white;
    z-index: 2;

    p {
        text-align: center;
        padding: 0 0 20px 0;
    }
`;

const ModalButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`;

const DeleteButton = styled.div`
  width: 200px;
  padding: 15px 60px;
  font-size: 20px;
  color: white;
  background: rgb(164, 0, 0);
  text-align: center;
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
  outline: none;
`;

const NoButton = styled.div`
  width: 200px;
  padding: 15px 60px;
  font-size: 20px;
  color: white;
  background: rgb(48, 184, 188);
  text-align: center;
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
  outline: none;
`;

const Note = props => {
    if (props.notes.length) {
        let note = props.notes.find(note => `${note._id}` === props.match.params.id);

        const deleteNotes = (event) => {
            event.preventDefault();
            props.deleteNote(note._id);
            props.deleteToggleOff();
        }

        return (
            <Container>
                {props.delete && (
                    <Modal>
                        <DeleteModal>
                            <p>Are you sure you want to delete this?</p>
                            <ModalButtons>
                                <DeleteButton onClick={deleteNotes}>Delete</DeleteButton>
                                <NoButton onClick={props.deleteToggleOff}>No</NoButton>
                            </ModalButtons>
                        </DeleteModal>
                    </Modal>
                )}

                <Actions>
                    <Link 
                        to={`/note/${note._id}/edit`}
                        onClick={() => props.updatedNote(note.title, note.textBody)}
                        style={{ color: 'black' }}
                    >
                        <ActionButton>edit</ActionButton>
                    </Link>
                    <ActionButton onClick={props.deleteToggleOn}>delete</ActionButton>
                 </Actions>
                 <NoteContainer>
                     <h2>{note.title}</h2>
                     <p style={{ lineHeight: '2'}}>{note.textBody}</p>
                 </NoteContainer>
            </Container>
        )
    } else {
        return <p>Loading...</p>
    }
}

export default Note;