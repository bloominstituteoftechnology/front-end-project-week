import React, { Component } from 'react';
import { addNote } from '../../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const NoteFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  padding: 5px;
  width: 394px;
  height: 47px;
`;
const TextBodyInput = styled.textarea`
  padding: 5px;
  width: 669px;
  height: 383px;
`;
const SaveButton = styled.input`
  width: 210px;
  height: 46px;
  border: 1px solid grey;
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

const mapStateToProps = state => ({
  notes: state.notes,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  null,
  { addNote }
)(NoteForm);
