import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';

const Edit = styled.div`
// display: flex;
// flex-direction: column;
`

const Header = styled.h2`
margin-left: 9%;
font-weight: bold;
margin-top: 1rem;
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
height: 2rem;
`

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            edit: props.newNote,
            clicked: props.clicked,
            submit: props.editSubmit
         }



    }
    render() { 
        return ( <Edit>

            <Header>Edit Note:</Header>
    
            <EditForm onSubmit={this.state.submit}>
                <NoteTitle
                    type='text'
                    placeholder='Edit Title'
                    autoComplete='off'
                    onChange={this.state.edit}
                    name='editName'
                />
                <br />
                <NewNote
                    type='text'
                    placeholder='Edit Content'
                    name='editText'
                    autoComplete='off'
                    onChange={this.state.edit}
                    rows='10'
                    cols='50'
                />
                <EditNotes onSubmit={this.state.submit}><NavLink to="/" activeStyle={{fontWeight: 'bold', color: 'white', textDecoration: 'none'}}>Edit</NavLink></EditNotes>
            </EditForm>
        </Edit>);
    }
}
 
export default EditNote;