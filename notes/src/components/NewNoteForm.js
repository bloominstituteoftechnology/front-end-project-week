import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Button = styled.button`
    background: whitesmoke;
    border-radius: 1px;
    border: 1px solid gray;
    margin-top: 3%;
    padding: .75em 0em;
    width: 35%;
    font-weight: bold;
    font-size: 14px;
    color: white;
    background: rgb(22, 175, 180);
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
                placeholder = 'Note Title' 
                onChange = {props.handleChange} 
                value = {props.title} 
            />

            <textarea
                className = 'text-area' 
                name = 'textBody'
                placeholder = 'Note Content' 
                rows = '25' cols = '50'
                onChange = {props.handleChange}
                value = {props.textBody}
            />

            <Button>Save</Button>
        </Form>
    )
}

export default NewNoteForm;