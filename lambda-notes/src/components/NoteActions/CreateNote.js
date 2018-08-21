import React from 'react';
import styled from 'styled-components';

const Create = styled.div `

`

const Header = styled.h2 `

`

const CreateNote = () => {
    return ( <Create>
        
        <Header>Create New Note:</Header>

        <input
        type='text'
        placeholder='New Title'
        autoComplete='off'
        />
        <br />
        <textarea  cols="100" rows="20" placeholder='New Content' />
        
        </Create> );
}
 
export default CreateNote;