import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    form {
        max-width: 20%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin: 0 auto;
    }
`

const AddNote = ({ addNote, handleChange }) => {
    return (
        <FormWrapper>
            <form id='addNote' onSubmit={addNote}>
                <label forhtml='addnote'>Title: </label>
                <input type='title' name='title' onChange={handleChange} />
                <label forhtml='addnote'>Text:</label>
                <textarea name='text' wrap="soft" cols="80" rows="20" onChange={handleChange} />
                <input type='submit' value='submit' />
            </form>
        </FormWrapper>
    )
}

export default AddNote
