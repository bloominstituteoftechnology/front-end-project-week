import React from 'react';
import styled from 'styled-components';


const NewForm = styled.div`
display: flex;
padding-left 500px;
width: 100%;
height: 500px;
background-color: #EEEEEE;
border: 1px solid blue;
`

const NewNote = () => {
    return (
        <NewForm>
            <form className='note-form'>
                <h1>Create New Note:</h1>
                <input className='note-title' type='text' placeholder='New Title' /><br />
                <input className='note-content' type='text' placeholder='New Content' />
            </form>
        </NewForm>
    );
}

export default NewNote;