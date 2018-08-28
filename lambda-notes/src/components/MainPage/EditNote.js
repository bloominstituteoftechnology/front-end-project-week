import React from 'react';
import styled from 'styled-components';


const EditForm = styled.div`
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

const EditNote = () => {
    return (
        <EditForm>
            <form className='note-form'>
                <h1>Edit Note:</h1>
                <input className='note-title' type='text' placeholder='Note Title' /><br />
                <input className='note-content' type='text' placeholder='Note Content' />
                <Buttons>Update</Buttons>
            </form>
        </EditForm>
    );
}

export default EditNote;