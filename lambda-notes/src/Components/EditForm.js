import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EditContainer = styled.div`
  border: 1px solid black;
  margin-left: 300px;
  margin-top: -610px;
  height: 610px;
`;

const Heading = styled.h2`
  display: flex;
  margin-left: 30px;  
`;

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.input`
  border-radius: 3px;
  width: 600px;
  height: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const Content = styled.textarea`
  border-radius: 3px;
  width: 600px;
  height: 300px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const UpdateButton = styled.button`
  width: 150px;
  height: 35px;
  margin-left: 30px;
  border: 1px solid gray;
  background: #24b8bd;
  color: white;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = event => {
    event.preventDefault();
    const updatedNote = {
      id: this.props.match.params.id,
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .put(`http://localhost:5000/api/notes/${this.props.match.params.id}`, updatedNote)
      .then(response => {
        this.setState({notes: response.data, updatedNote});
        this.props.fetchNotes();
      })
      .catch(error => {
        console.log('Server Error', error)
      });
      this.props.history.push('/')
  };

  render() {
    return (
      <EditContainer>
        <Heading>Edit Note:</Heading>
        <CreateForm>
          <InputTitle 
            name='title'
            placeholder='Note Title'
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <Content
            name='textBody'
            placeholder='Note Content'
            value={this.state.textBody}
            onChange={this.handleInputChange}
          />
          <UpdateButton onClick={this.updateNote}>Update</UpdateButton>
        </CreateForm>
      </EditContainer>
    );
  }
}

export default EditForm;