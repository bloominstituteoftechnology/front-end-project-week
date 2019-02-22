import React from 'react';
import styled from 'styled-components';

const DeleteNoteContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    z-index:1;
    background:rgba(0, 0, 0, 0.5);
    margin:auto;
    height:100vh;
    width:100%;
`;

const DeleteOptions = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    background:white;
    border:1px solid black;
    width: 40%;
    height:150px;
    padding:20px;
`;

const ButtonsContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    width:100%;
`;

const Button = styled.button`
    width:35%;
    background:#24b8bd;
    border:1px solid black;
`;


const DeleteNote = props => {

    return(
        <DeleteNoteContainer>
            <DeleteOptions>
                <h2>Are you sure you want to delete this?</h2>
                <ButtonsContainer>
                    <Button onClick={props.deleteNote}>Delete</Button>
                    <Button onClick={props.dontDelete}>No</Button>
                </ButtonsContainer>
            </DeleteOptions>
        </DeleteNoteContainer>
    )
}

export default DeleteNote;