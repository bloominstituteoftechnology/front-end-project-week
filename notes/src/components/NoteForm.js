import React from 'react';
import {addNote, editNote} from '../store/actions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Button} from './NavBar';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px dotted blue;
  background-color: #F2F1F2;
  margin-left: 23%;
  padding-top: 32px;
`;

const StyledInput = styled.input`
  padding: 10px 5px;
  width: 40%;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const StyledTextArea = styled.textarea`
  height: 30rem;
  width: 80%;
`;

const FormButton = styled(Button)`
  width: 20%;
  //padding: 5px 10px;
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
      const note = this.props.notes.find(
        n => n._id === this.props.match.params.id,
      );
      this.setState({
        title: note.title,
        textBody: note.textBody,
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
    //console.log(this.props, 'noteform');
    //console.log(this.props.match.params.id);
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
  notes: state.notes,
});

export default connect(
  mapStateToProps,
  {addNote, editNote},
)(NoteForm);
