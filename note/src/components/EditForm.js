import React, { Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EditNote = styled.div`
    border: 1px solid black;
    margin-left: 20%;
    height: 100vh
`;

const Heading = styled.h2`
    margin-left: 5%;
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

const FormCard = styled.form`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: ''
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    updateNote = event => {
        event.preventDefault();
        const updatedNote = {
            id: this.state.id,
            title: this.state.title,
            textBody: this.state.textBody
        }
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, updatedNote)
            .then(response => {
                this.setState({notes: response.data, updatedNote});
                this.props.fetchNotes();
            })
            .catch(error => console.log(error))
            this.props.history.push('/')
    }

    render() {
        return (
            <EditNote>
                <FormCard>
                <Heading>Edit Note:</Heading>
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

                <Button onClick={this.updateNote}>Update</Button>
                </FormCard>
            </EditNote>
        )
    }
}

export default EditForm;