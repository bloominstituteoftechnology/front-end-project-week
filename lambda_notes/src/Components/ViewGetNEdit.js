import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import {
//   CreateViewWrapper,
//   CreateHeader,
//   Form,
//   TitleInput,
//   ContentInput,
//   Btn,
// } from './Styled';

//CreateNewOnes.js
export const CreateViewWrapper = styled.div`
width: 75%
max-width: 665px;
background: #F2F1F2;
margin-top: 50px;
`;
export const CreateHeader = styled.h3`
  margin-left: 25px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
export const TitleInput = styled.input`
  width: 54%; 
  max-width: 358px;
  height: 43px;
  border: 2px solid #B7B7B7
  background: white;
`;
export const ContentInput = styled.input`
  width: 91%;
  max-width: 605px;
  height: 348px;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #B7B7B7
  background: white;
`;

export const Btn = styled.button`
  width: 100%;
  max-width: 170px;
  height: 44px;
  border: 1px solid #afb4b5;
  background: #57b5bb;
  color: #f3f7f6;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
  :hover {
    background-color: white;
    color: gray;
  }
`;


class ViewGetNEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      id: '',
    };
  }

  componentDidMount() {
    console.log('TEST');
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res, 'Logging for Get request');
        this.setState({
          textBody: res.data.textBody, title: res.data.title, id: res.data._id,
        });
      })
      .catch(err => console.log(err));
  }

  changeNoteDetails = e => {
    e.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.id}`, {
        title: this.state.title,
        textBody: this.state.textBody,
      })
      .then(() => { console.log('SUCCESS'); this.props.history.push('/'); })
      .catch(err => { console.log(err, 'Error, No Change.'); });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render() {
    return (
      <CreateViewWrapper>
        <CreateHeader>Edit Note:</CreateHeader>

        <Form onSubmit={this.changeNoteDetails}>
          <TitleInput
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Note Title"
          />
          <ContentInput
            name="textBody"
            type="text"
            value={this.state.textBody}
            onChange={this.handleChange}
            placeholder="Note Content"
          />
          <Btn>Update</Btn>
        </Form>
      </CreateViewWrapper>
    );
  }
}

export default ViewGetNEdit;
