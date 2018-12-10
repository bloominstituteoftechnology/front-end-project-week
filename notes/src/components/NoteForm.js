import React from 'react';
import {addNote, editNote} from '../store/actions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Button} from './NavBar';
import {withRouter} from 'react-router';
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px dotted blue;
  background-color: #F2F1F2;
  margin-left: 16.5%;
  padding-left: 2%;2%
`;

const StyledInput = styled.input`
  padding: 7px;
  width: 40%;
  margin-bottom: 10px;
`;

const StyledTextArea = styled.textarea`
  height: 30rem;
  width: 80%;
`;

const FormButton = styled(Button)`
  width: 8%;
`;

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      textBody: '',
    };
  }

  componentDidMount() {
    console.log('cdm', this.props);
    if (this.props.isEditing) {
      this.setState({
        title: this.props.selectedNote.title,
        textBody: this.props.selectedNote.textBody,
      });
    }
  }

  clearState() {
    this.setState({title: '', textBody: ''});
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const func = this.props.isEditing
      ? this.props.editNote
      : this.props.addNote;
    const args = this.props.isEditing
      ? {...this.state, _id: this.props.match.params.id}
      : this.state;
    func(args);
    this.clearState();
    while (this.props.adding) {
      console.log('adding...');
    }
    this.props.history.push('/notes');
  };

  makeInput = (name, type) => {
    return (
      <StyledInput
        type={type}
        name={name}
        value={this.state[name]}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    console.log(this.props, 'noteform');
    console.log(this.props.match.params.id);
    const buttonText = this.props.isEditing ? 'Update' : 'Save';
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <h2>Create a Note</h2>
        {this.makeInput('title', 'text')}
        <StyledTextArea
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
        <FormButton>{buttonText}</FormButton>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => ({
  isEditing: state.isEditing,
  selectedNote: state.selectedNote,
  deleting: state.deleting,
  adding: state.adding,
});

export default connect(
  mapStateToProps,
  {addNote, editNote},
)(NoteForm);
