import React from 'react';
import styled from 'styled-components';

const DeleteNoteContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 150px;
    margin-left: -275px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfafb;
    width: 550px;
    height: 180px;
    font-size: 1.4rem;
    border: 1px solid black;
`;

const DeleteNoteButtons = styled.div`
    display: flex;

    button{
        font-size: 1.6rem;
        height: 40px;
        width: 200px;
        color: white;
        margin-top: 30px;
        margin-bottom: 15px;
        border: 1px solid #6dabad;
        cursor: pointer;
        outline-style: none;
    }
    
    button.delete{
        margin-right: 20px;
        background-color: #ca001a;
        
        &:hover{
            color: #24b8bd;
            background-color: white;
        }
    }

    button.dont-delete{
        background-color: #24b8bd;

        &:hover{
            color: #24b8bd;
            background-color: white;
        }
    }
`;

const DeleteNoteModal = props=>{

    function handleDelete(event){
        event.preventDefault();
        event.stopPropagation();
        props.deleteNote(true);
    }

    function handleNo(event){
        props.deleteNote(false);
    }

    return(
        <DeleteNoteContainer>
            <p>Are you sure you want to delete this?</p>
            <DeleteNoteButtons>
                <button className="delete" onClick={handleDelete}>Delete</button>
                <button className="dont-delete" onClick={handleNo}>No</button>
            </DeleteNoteButtons>
        </DeleteNoteContainer>
    )
}

export default DeleteNoteModal;