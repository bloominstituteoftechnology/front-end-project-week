import React, { Component } from 'react';
import { addNote } from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const NoteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f1f2;
  width: 100%;
`;
const NoteHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  padding: 70px 0px 35px 35px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 35px 35px;
`;
const TitleInput = styled.input`
  padding: 5px;
  width: 394px;
  height: 47px;
  margin-bottom: 10px;
`;
const TextBodyInput = styled.textarea`
  padding: 5px;
  width: 669px;
  height: 383px;
  margin-bottom: 10px;
`;
const SaveButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 47px;
  border: 1px solid grey;
  background: #24b8bd;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 15px;
`;

class NoteForm extends Component {
  state = {
    tags: '',
    title: '',
    textBody: ''
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    // this.setState({
    //   tags: '',
    //   title: '',
    //   textBody: ''
    // });
    setTimeout(() => {
      this.props.history.push('/');
    }, 1000);
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <NoteFormWrapper className="note-form-wrapper">
        <NoteHeaderWrapper>Your Notes:</NoteHeaderWrapper>
        <FormWrapper onSubmit={this.submitHandler}>
          {/* <input
          type="text"
          value={this.state.tags}
          name="tags"
          onChange={this.changeHandler}
          required
        /> */}
          <TitleInput
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.changeHandler}
            required
          />
          <TextBodyInput
            // type="text"
            value={this.state.textBody}
            name="textBody"
            onChange={this.changeHandler}
            required
          />
          <SaveButton type="submit" value="Add New Note" />
        </FormWrapper>
      </NoteFormWrapper>
    );
  }
}

export default connect(
  null,
  { addNote }
)(NoteForm);
