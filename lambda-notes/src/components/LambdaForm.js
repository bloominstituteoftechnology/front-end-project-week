import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormStyle = styled.div`
    width: 75%;
    margin-left: 20px;
`

const LambdaForm = props => {
    return (
        <FormStyle>
            <h1>Create New Note:</h1>
            <form>
                <input style={{ width: '500px', height: '30px', marginBottom: '15px' }} type="text" name="title" placeholder="Note Title" onChange={props.handleChange} value={props.title} /><br />
                <textarea style={{ width: '600px', height: '350px' }} type="text" name="body" placeholder="Note Content" onChange={props.handleChange} value={props.body} /><br />
            <Link to="/"><button onClick={props.handleAddnote}>Save</button></Link>
            </form>
        </FormStyle>
    )
}

export default LambdaForm;