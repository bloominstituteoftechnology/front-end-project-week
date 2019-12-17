import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { Link } from 'react-router-dom';
import { Container, FormWrapper, Button, InputTitle, InputText } from '../StyledComponents/Form'

class NoteForm extends Component {
  state = {
    title: '',
    textBody: ''
  };

  componentDidMount() {
    console.log('note form mounted?');
    this.forceUpdate();
  }

  handleNoteInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const note = { title: this.state.title, textBody: this.state.textBody };
    console.log('note form');
    this.props.addNote(note);
    this.setState({ title: '', textBody: '' });
  };

  render() {
    return (
      <Container>
        <FormWrapper>
          <h3>Create New Note:</h3>
          <InputTitle type="text" placeholder="note title" onChange={this.handleNoteInput} name="title" value={this.state.title} />
          <InputText type="text" placeholder="note text" onChange={this.handleNoteInput} name="textBody" value={this.state.textBody} />
          <Link to="/">
            <Button onClick={() => this.handleSubmit()}>
              Save
            </Button>
          </Link>
        </FormWrapper>
      </Container>
    )}
}
// pass in anonmyous function
export default connect(
  null,
  { addNote }
)(NoteForm);
