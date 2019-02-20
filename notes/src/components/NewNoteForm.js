import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Button = styled.button`
    background: whitesmoke;
    color: purple;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const NewNoteForm = props => {
    return (
        <Form onSubmit = {props.submitHandler}>
            <input
                className = 'input' 
                name = 'title' 
                type = 'text' 
                placeholder = 'note title' 
                onChange = {props.handleChange} 
                value = {props.title} 
            />

            <textarea
                className = 'text-area' 
                name = 'textBody'
                placeholder = 'content' 
                rows = '25' cols = '50'
                onChange = {props.handleChange}
                value = {props.textBody}
            />

            <Button>save</Button>
        </Form>
    )
}

export default NewNoteForm;