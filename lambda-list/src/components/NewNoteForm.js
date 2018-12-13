import React from 'react';
import '../App.css';

import styled from 'styled-components'

const Button = styled.button`
  background: #2ac0c4;
  border-radius: 1px;
  border: 1px solid gray;
  color: white;
  margin-top: 3%;
  padding: .75em 0em;
  width: 150px;
  font-weight: bold;
  font-size: 14px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const NewNoteForm = props => {
    return (

        <Form onSubmit={props.submitHandler}>
            <input 
                className="input"
                name="title"
                type="text"
                placeholder="Note Title"
                onChange={props.handleChange}
                value={props.title}
                />
                
                
            <textarea className='text-area' 
            name="textBody"
            placeholder='Note Content' 
            rows="30" cols="50"
            onChange={props.handleChange}
            value={props.textBody}
            />
            
            <Button>Save</Button>
        </Form>
        
    )
}

export default NewNoteForm;

