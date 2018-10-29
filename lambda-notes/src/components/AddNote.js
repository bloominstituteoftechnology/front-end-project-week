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

const AddNote = props => {
    return (
        <FormWrapper>
            <form id='addNote' onSubmit={props.addNote}>
                <label forhtml='addnote'>Title: </label>
                <input type='title' name='title' onChange={props.handleChange} />
                <label forhtml='addnote'>Text:</label>
                <textarea name='textBody' wrap='soft' cols='80' rows='20' onChange={props.handleChange} />
                <input type='submit' value='submit' />
            </form>
        </FormWrapper>
    )
}

export default AddNote
