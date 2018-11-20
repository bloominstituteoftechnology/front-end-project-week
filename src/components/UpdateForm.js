import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNote } from '../actions';
import { Container, FormWrapper, Button, InputTitle, InputText } from '../StyledComponents/Form';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }
  componentDidMount() {
    // const noteId = this.props.match.params.id;
    // console.log(noteId);
    // const note = this.props.notes.find(note => note._id === noteId);
    // this.setState({ ...note });
    const { title, textBody, id } = this.props.location.state;
    this.setState({ title, textBody, id });
  }

  updateHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateSubmit = () => {
    // console.log('this is state', this.props.location.state);
    const { id, textBody, title } = this.state
    const editNote = { title, textBody };
    // console.log(editNote);
    // console.log(this.props.location);
    this.props.updateNote(id, editNote);
    this.setState({ id: null, title: '', textBody: '' });
  };

  render() {
    return (
      <Container>
        <FormWrapper>
          <h3>Edit Note:</h3>
          <InputTitle type="text" onChange={this.updateHandler} name="title" value={this.state.title} placeholder="edit title" />
          <InputText type="text" onChange={this.updateHandler} name="textBody" value={this.state.textBody} placeholder="edit textbody" />
          <Link to="/">
            <Button onClick={() => this.handleUpdateSubmit()}>
              Update
            </Button>
          </Link>
        </FormWrapper>
      </Container>
    )}
}

// const mapStateToProps = (state, ownProps) => {
//   const { id } = ownProps.match.params;
//   return {
//     note: state.note.find((note) => note._id === id)
//   };
// };

export default connect(
  null,
  { updateNote }
)(UpdateForm);
