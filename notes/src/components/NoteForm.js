import React from 'react';
import {addNote, editNote, stopEditMode} from '../store/actions';
import {connect} from 'react-redux';
import {StyledForm, StyledInput, StyledTextArea, FormButton} from '../styles';

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      textBody: '',
    };
  }

  componentDidMount() {
    if (this.props.isEditing) {
      const note = this.props.notes.find(
        n => n._id === this.props.match.params.id,
      );
      if (!note) {
        this.props.stopEditMode();
        this.props.history.push('/create');
        return null;
      }
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
  {addNote, editNote, stopEditMode},
)(NoteForm);
