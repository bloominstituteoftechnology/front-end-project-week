import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';

const Edit = styled.div`
// display: flex;
// flex-direction: column;
`

const Header = styled.h2`
margin-left: 9%;
`

const EditForm = styled.form`
display: flex;
flex-direction: column;
margin-left: 5%;
`

const NoteTitle = styled.input`
font-size: 1.5;
padding: 0.25rem 0.75rem;
margin-bottom: 1rem;
border-radius: 0.2rem;
border: 1px solid #B2B2B2
width: 75%;
margin-left: 5%;
`

const NewNote = styled.textarea`
resize: none;
font-size: 1.5;
margin-bottom: 1rem;
border-radius: 0.2rem;
border: 1px solid #B2B2B2;
width: 115%;
margin-left: 5%;
`

const EditNotes = styled.button`
background: #24b8bd;
border: 1px solid #cdcecf;
color: white;
font-weight: bold;
width: 50%;
margin-left: 5%;
`

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }



    }
    render() { 
        return ( <Edit>

            <Header>Edit Note:</Header>
    
            <EditForm>
                <NoteTitle
                    type='text'
                    placeholder='New Title'
                    autoComplete='off'
                    name='noteName'

                />
                <br />
                <NewNote
                    type='text'
                    placeholder='New Content'
                    name='noteText'
                    autoComplete='off'
                    rows='10'
                    cols='50'
                />
                <NavLink to="/" activeStyle={{fontWeight: 'bold', color: 'white', textDecoration: 'none'}}><EditNotes>Edit</EditNotes></NavLink>
            </EditForm>
        </Edit>);
    }
}
 
export default EditNote;