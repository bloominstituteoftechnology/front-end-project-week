import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteNote } from '../actions';

const NoteWrapper = styled.div`
    margin: 20px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 0 0;
`;
const SCButton = styled.button`
    background: none;
    border: none;
    font-weight: bold;
    text-decoration: underline;
    font-size: 14px;
`;
const NotesHeader = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0 30px 0;
`;
const DeleteConfirmWrapper = styled.div`
    background: rgba(128,128,128,.75);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    visibility: ${props => (props.visibility === false ? "hidden" : "visible")};
`;
const DeleteConfirmBox = styled.div`
    border: 1px solid darkgrey;
    background: #FBFAFB;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0 0 0;
`;
const DeleteConfirmHeader = styled.h4`
    font-weight: bold;
`;
const DeleteButton = styled.button`
    width: 150px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
    margin: 30px 15px;
    border: 1px solid lightgrey;
    background: ${props => (props.color === "red" ? "#CA001A" : "#25B7BD")};
`;

class Note extends React.Component {
    state = {
        visibility: false,
    }

    displayConfirm = ev => {
        ev.preventDefault();
        this.setState((prevState) => { 
            return {visibility: !prevState.visibility}
        });
    }

    render() {
        const selectedNote = this.props.notes.find(note => `${note._id}` === this.props.match.params.noteId)
        console.log(selectedNote);
        if(selectedNote === undefined) {
            return <div>Loading...</div>
        }

        return (
            <>
                <NoteWrapper>
                    <ButtonWrapper>
                        <SCButton onClick={() => this.props.history.push(`/note/edit/${selectedNote._id}`)}  >edit</SCButton>
                        <SCButton onClick={this.displayConfirm}>delete</SCButton>
                    </ButtonWrapper>
                    <NotesHeader>{selectedNote.title}</NotesHeader>
                    <p>{selectedNote.textBody}</p>
                </NoteWrapper>
                <DeleteConfirmWrapper visibility={this.state.visibility}>
                <DeleteConfirmBox>
                    <DeleteConfirmHeader>Are you sure you want to delete this?</DeleteConfirmHeader>
                    <div>
                        <DeleteButton color="red" onClick={() => {this.props.deleteNote(selectedNote._id); this.props.history.push("/")}}>Delete</DeleteButton>
                        <DeleteButton onClick={this.displayConfirm}>No</DeleteButton>
                    </div>
                </DeleteConfirmBox>
            </DeleteConfirmWrapper>
        </>
        )
    }
}

export default connect(null, { deleteNote } )(Note);