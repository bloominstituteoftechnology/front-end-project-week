import React from 'react';
import styled from 'styled-components';


const Modal = styled.div`
    dispaly flex;
    justify-content: center;
    align-items: center;
    margin-left: 40%;
    width: 30%;
    height: 160px;
    border: 1px solid red;
    background-color: white;
    z-index: 1;
    `
const DeleteBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    `
const Heading = styled.div`
    display: flex;
    justify-content: center;
    font-size: 15px;
    margin-top:5px;
    `
const Buttons = styled.button`
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    `;
const Del = Buttons.extend`
    background-color: red;
    margin-right: 10px;
    `
const Cancel = Buttons.extend`
    background-color: lightblue;
    margin-left: 10px;
    `


const DeleteNote = () => {
    return (
        <Modal>
            <Heading><h2>Are you sure you want to delete this?</h2></Heading>
            <DeleteBox>
                <Del>Delete</Del>
                <Cancel>No</Cancel>
            </DeleteBox >
        </Modal>
    );
}

export default DeleteNote;