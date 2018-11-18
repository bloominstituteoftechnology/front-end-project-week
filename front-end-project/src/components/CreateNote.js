import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CreateNoteContainer = styled.div`
    padding-top: 50px;
`

const CreateHeader = styled.h2`
    color: #4A494A;
    font-size: 1.4rem;
    margin-bottom: 30px;
    font-weight: bold;
` 

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        }
    }

    //handle change to input in form

    inputChangehandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //add new friend through post and pass up friend data to app 

    addNew = (e) => {
        e.preventDefault();
        axios
            .post(`https://fe-notes.herokuapp.com/note/create`, {
                title: this.state.title,
                textBody: this.state.textBody,
            })
            .then(response => {
                this.props.addNote();
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
            this.setState({
                title: '',
                textBody: ''
            });  
    }

    render() {
        return (
            <CreateNoteContainer>
                <CreateHeader>
                    Create New Note:
                </CreateHeader>
                <form onSubmit={this.addNew}>
                    <input
                        type='text'
                        name='title'
                        placeholder='Note Title'
                        onChange={this.inputChangehandler}
                        value={this.state.title}
                    />
                    <input
                        type='text'
                        name='textBody'
                        placeholder='Note Content'
                        onChange={this.inputChangehandler}
                        value={this.state.textBody}
                    />
                    <button type='submit'>Save</button>                    
                </form>
            </CreateNoteContainer>
        )
    }
}

export default CreateNote;