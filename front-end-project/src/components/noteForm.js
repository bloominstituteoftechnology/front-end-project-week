import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, editNote } from '../actions';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {notes: state.notes}
};

class NoteForm extends Component {
    constructor() {
        super();
        this.state= {
            newNote:{
                title: '',
                note: '',
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        let new_note = this.state.newNote;
        new_note[event.target.name] = event.target.value;
        this.setState({ newNote: new_note});
    };
    
    submitNote = (event) => {
        event.preventDefault();
        if (this.state.newNote.id === undefined) {
            this.props.addNote(this.state.newNote);
        }
        else {
            this.props.editNote(this.state.newNote,this.state.newNote.id);
        }
        this.setState({
            newNote:{title:'',note:'',}
        });
        //this.props.history.push('/');
    };

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
          this.setState({
            newNote: this.props.notes.filter(
              note => parseInt(this.props.match.params.id, 10) === note.id
            )[0]
          });
        }
    }

    render () {
        return (
        <Container className="my-5">
        <h3 className="header my-4">Create New Note:</h3>
        <Form
          onSubmit={this.submitNote.bind(this)}
          onChange={this.handleChange.bind(this)}
        >
          <FormGroup>
            <Input
              className="w-50"
              type="text"
              placeholder="Title"
              value={this.state.newNote.title}
              name="title"
            />
          </FormGroup>
          <FormGroup>
            <textarea
              className="form-control"
              placeholder="Note"
              name="note"
              rows="10"
              cols="50"
              value={this.state.newNote.note}
            />
          </FormGroup>
          <Button className="w-25" type="submit">
            Save
          </Button>
        </Form>
      </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps, {addNote, editNote})(NoteForm))