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

        <Form>
            <input 
                className="input"
                type='text'
                placeholder="Note Title"/>
                
            <textarea className='text-area' 
            placeholder='Note Content' 
            rows="30" cols="50">
            </textarea>
            <Button>Save</Button>
        </Form>
        
    )
}

export default NewNoteForm;

