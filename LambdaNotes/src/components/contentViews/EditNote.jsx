import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { editNote, activateNote } from '../../actions';

class EditNote extends Component {
  constructor() {
    super();

    this.state = {
      note: {
        id: null,
        title: '',
        text: ''
      }
    };
  }

  componentDidMount() {
    this.props.activateNote(this.props.match.params.id);
    const oldNote = this.props.activeNote
    this.setState({
      note: {
        id: oldNote.id,
        title: oldNote.title,
        text: oldNote.text
      }
    })
  }

  //add component did mount to make note as inputState

  handleInput = (event) => {
    const newNote = this.state.note;
    newNote[event.target.name] = event.target.value;
    this.setState({ newNote });
  };

  submitEdit = (event) => {
    event.preventDefault();
    this.props.editNote(this.state.note);
    this.setState({
      note: {
        id: null,
        title: '',
        text: ''
      }
    });
  };


  render() {
    return (
      <div>
        <h1>Edit Note: </h1>
        <Form onSubmit={this.submitEdit}>
          <FormGroup>
            <Input name="title" type="text" onChange={this.handleInput} value={this.state.note.title} />
            <Input type="textarea" name="text" onChange={this.handleInput} placeholder="Note Content" value={this.state.note.text} />
            <Button>Save</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
  };
};

export default connect(mapStateToProps, { editNote, activateNote })(EditNote);
