import React from 'react';
import {addNote, editNote} from '../store/actions';
import {connect} from 'react-redux';

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
        textBody: this.props.selectedNote.title,
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
    ('');
    e.preventDefault();
    this.props.addNote(this.state);
    this.clearState();
  };

  makeInput = (name, type) => {
    return (
      <input
        type={type}
        name={name}
        value={this.state[name]}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.makeInput('title', 'text')}
        <textarea
          name="textBody"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isEditing: state.isEditing,
  selectedNote: state.selectedNote,
});

export default connect(
  mapStateToProps,
  {addNote, editNote},
)(NoteForm);
