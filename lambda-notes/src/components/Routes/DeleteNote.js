import React from 'react';
import styled from 'styled-components';

const DeleteBox = styled.div`
    display: flex;
    margin-left: 300px;
    justify-content: center;
    height: 400px;
    `

const Buttons = styled.div`
    width: 150px;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    color: white;
    `;

const Del = Buttons.extend`
background-color: red;`



const DeleteNote = () => {
    return (
        <DeleteBox>
            <h2>Are you sure you want to delete this?</h2>
            <Del>Delete</Del>
            <Buttons>No</Buttons>
        </DeleteBox >
    );
}

export default DeleteNote;