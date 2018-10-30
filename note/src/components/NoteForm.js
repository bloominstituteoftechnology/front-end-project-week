import React, { Component }from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddNote = styled.div`
    border: 1px solid black;
    margin-left: 20%;
    height: 100vh
`;
const Heading = styled.h2`
    margin-left: 5%;
`;

const FormCard = styled.form`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.input`
    width: 60%;
    height: 30px;
`;

const Text = styled.textarea`
    width: 95%;
    height: 300px;
`;

const Button = styled.button`
    margin-top: 2%;
    width: 20%;
    height: 40px;
    background: #2AC0C4;
    color: white;
`;

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addNote = event => {
        event.preventDefault();
        const newNote = {
          title: this.state.title,
          textBody: this.state.textBody,
        };
        axios
            .post('https://fe-notes.herokuapp.com/note/create', newNote)
            .then(response => {
                this.setState({notes: response.data, newNote})
                this.props.fetchNotes();
            })
            .catch(error => console.log(error))
            this.props.history.push('/')
    }

    

    render() {
        return (
            <AddNote>
                <Heading>Create New Note:</Heading>
                <FormCard onSubmit={this.addNote}>
                    <Title
                        name='title'
                        placeholder='Note Title'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <Text
                        name='textBody'
                        placeholder='Note Content'
                        value={this.state.textBody}
                        onChange={this.handleInputChange}
                    />
                    <Button type='submit'>Save</Button>
                </FormCard>
        </AddNote>
        )
    }
}

export default NoteForm;