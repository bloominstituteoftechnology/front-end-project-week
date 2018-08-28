import React from 'react';
import styled from 'styled-components';


const NewForm = styled.div`
display: flex;
padding-left 500px;
width: 100%;
height: 500px;
background-color: #EEEEEE;
`
const Buttons = styled.div`
    width: 150px;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    color: white;
    `;

const NewNote = () => {
    return (
        <NewForm>
            <form className='note-form'>
                <h1>Create New Note:</h1>
                <input className='note-title' type='text' placeholder='Note Title' /><br />
                <input className='note-content' type='text' placeholder='Note Content' />
                <Buttons>Save</Buttons>
            </form>
        </NewForm>
    );
}

export default NewNote;