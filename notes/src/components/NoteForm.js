import React from 'react';
import {addNote, editNote} from '../store/actions';
import {connect} from 'react-redux';
//import styled from 'styled-components';
//import {Button} from './NavBar';
import {
  //Button,
  StyledForm,
  StyledInput,
  StyledTextArea,
  FormButton,
} from '../styles';

/*
 *const StyledForm = styled.form`
 *  display: flex;
 *  flex-direction: column;
 *  background-color: #f2f1f2;
 *  //margin-left: 28%;
 *  margin-left: 300px;
 *  padding-top: 5.9rem;
 *  padding-left: 0.5rem;
 *  width: 70%;
 *
 *  //@media (min-width: 1200px) {
 *  //margin-left: 31%;
 *  //}
 *
 *  h2 {
 *    font-size: 2.1rem;
 *  }
 *`;
 *
 *export const StyledInput = styled.input`
 *  border-radius: 5px;
 *  margin-top: 15px;
 *  margin-bottom: 10px;
 *  padding: 1.4rem 1.7%;
 *  width: 55%;
 *`;
 *
 *const StyledTextArea = styled.textarea`
 *  height: 31rem;
 *  width: 90%;
 *  border-radius: 5px;
 *  padding: 1.9rem 3.4%;
 *`;
 *
 *const FormButton = styled(Button)`
 *  width: 31.5%;
 *  //padding: 5px 10px;
 *`;
 *
 */

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
      if (!note) this.props.history.push('/create');
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
    console.log('handle', args);
    func(args);
    this.clearState();
    this.props.history.push('/notes');
  };

  makeInput = (name, type, placeholder = '') => {
    return (
      <StyledInput
        type={type}
        name={name}
        value={this.state[name]}
        onChange={this.handleChange}
        placeholder={placeholder}
      />
    );
  };

  render() {
    //console.log(this.props, 'noteform');
    //console.log(this.props.match.params.id);
    const buttonText = this.props.isEditing ? 'Update' : 'Save';
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <h2>Create New Note</h2>
        {this.makeInput('title', 'text', 'Note Title')}
        <StyledTextArea
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
          placeholder="Note Content"
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
