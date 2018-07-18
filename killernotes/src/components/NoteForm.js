import React from 'react';
import { connect } from 'react-redux';
import { addNote, editing, editNote } from '../actions';
import styled from 'styled-components';

const Note = styled.div`
  font-family: raleway;
  padding: 8px;
  margin-left: 233px;
  margin-right: 20px;
  margin-top: 16px;
  word-break: break-all;
  border: 1px solid rgb(151, 151, 151);
  width: 647px;
  height: 869px;
  > h2 {
    font-family: Roboto;
    margin-top: 44px;
    margin-left: 15px;
  }
`;

const TitleInput = styled.input`
  width: 344px;
  height: 38px;
  padding-left: 10px;
  margin-top: 7px;
  margin-left: 18px;
  border: 1px solid rgb(151, 151, 151);
`;

const BodyInput = styled.textarea`
  padding-top: 20px;
  padding-left: 22px;
  margin-top: 15px;
  width: 583px;
  height: 323px;
  margin-left: 17px;
  border: 1px solid rgb(151, 151, 151);
`;

const Button = styled.button`
  margin-top: 10px;
  margin-left: 18px;
  width: 195px;
  height: 44px;
  background-color: #2bc1c4;
  font-size: 16px;
  color: #fff;
`;

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      edit: false,
      id: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('PROPS', this.props.notes);
    if (this.props.notes[0] && id) {
      // filter returns an array
      const note = this.props.notes.filter(n => n._id === id);
      this.setState({
        title: note[0].title,
        textBody: note[0].textBody,
        id: note[0]._id,
      });
    }
    this.setState({ editing: this.props.edit });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clicked = () => {
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    };
    this.setState({ title: '', textBody: '' });
    if (this.state.edit) {
      this.props.editNote(newNote);
    } else {
      this.props.addNote(newNote);
    }
    // go home after
    this.props.history.push('/');
  };

  render() {
    return (
      <Note>
        {this.state.editing ? <h2>Edit Note:</h2> : <h2>Create New Note:</h2>}
        <TitleInput
          onChange={this.handleInputChange}
          placeholder="Note Title"
          value={this.state.title}
          name="title"
        />
        <br />
        <BodyInput
          onChange={this.handleInputChange}
          placeholder="Note Content"
          value={this.state.textBody}
          name="textBody"
        />
        <br />
        <Button onClick={this.clicked}>
          {this.state.editing ? 'Update' : 'Save'}
        </Button>
      </Note>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    edit: state.editingNote,
  };
};

export default connect(
  mapStateToProps,
  { addNote, editing, editNote },
)(NoteForm);
