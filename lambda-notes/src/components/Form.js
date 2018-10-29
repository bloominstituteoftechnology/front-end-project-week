import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form `
    
    width: 500px;
    h3{
        margin-bottom: 25px;
    }
    input{
        width:60%;
        margin: 15px 0;
    }
    textarea{
        width:100%;
        height: 340px;
        margin: 15px 0;
    }

`

const Form = props =>{
    return <StyledForm>
        <h3>Create New Note:</h3>
        <input type='text' placeholder='Note Title' value={props.state.title} onChange={props.changeHandler}></input>
        <textarea name='textBody' placeholder='Note Content' value={props.state.textBody} onChange={props.changeHandler}></textarea>
        <div type='submit' className='button'>Save</div>
    </StyledForm>
}


export default Form