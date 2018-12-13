


import React, { Component } from "react";
import styled from 'styled-components';
import axios from 'axios';




const CreateViewWrapper = styled.div`
width: 75%
max-width: 600px;
background: #F2F1F2;
margin-top: 50px;
`;
const CreateHeader = styled.h3`
  margin-left: 25px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
const TitleInput = styled.input`
  width: 54%; 
  max-width: 358px;
  height: 43px;
  border: 2px solid #B7B7B7
  background: white;
`;
const ContentInput = styled.input`
  width: 91%;
  max-width: 605px;
  height: 348px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #B7B7B7
  background: white;
`;

const Btn = styled.button`
  width: 100%;
  max-width: 192px;
  height: 40px;
  border: 1px solid #afb4b5;
  background: #57b5bb;
  color: #f3f7f6;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
  :hover {
    background-color: black;
    color: gray;
  }
`;




class CreateNewOnes extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      textBody: ''


    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addNewNote = e => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state)
      .then(res => {
        this.setState({ title: '', textBody: '' });
        this.props.history.push('/');
      })
      .catch(err => console.log(err, "Nothing Made"));
  };

  render() {
    return (
      <CreateViewWrapper>
        <CreateHeader>Create New Note:</CreateHeader>

        <Form
          onSubmit={
            this.addNewNote}
        >
          <TitleInput
            type = 'text'
            name="title"
            placeholder='  Note Title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <ContentInput
            type = 'text'
            name="textBody"
            placeholder='  Note Content'
            value={this.state.textBody}
            onChange={this.handleChange}
          />
          <Btn type="submit">Save</Btn>

        </Form>
      </CreateViewWrapper>
    );
  };
}

export default CreateNewOnes;

