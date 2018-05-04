import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, editNote } from '../actions';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const uid = window.localStorage.getItem("uid");

const mapStateToProps = state => {
    return {notes: state.notes}
};

class NoteForm extends Component {
    constructor() {
        super();
        this.state= {
            newNote:{
                title: '',
                body: ''
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
            this.props.editNote(this.state.newNote,this.state.newNote._id);
        }
        this.setState({
            newNote:{title:'',body:''}
        });
        this.props.history.push(`/${uid}/displayNotes`);
    };

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
          this.setState({
            newNote: this.props.notes.filter(
              note => (this.props.match.params.id, 10 === note.id)
            )[0]
          });
        }
    }

    render () {
        let createNote= this.state.newNote;
        if (this.state.newNote.id === undefined) createNote = this.state.newNote.id;
        //console.log(this.state.newNote.id);
        return (
        <Container className="my-5">
        {createNote ? (
            <h3 className="header my-4">Edit Note:</h3>
        ) : (
            <h3 className="header my-4">Create New Note:</h3>
        )}
        
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
              name="body"
              rows="10"
              cols="50"
              value={this.state.newNote.body}
            />
          </FormGroup>
            {createNote ? (
                <Button className="w-25" type="submit">Update</Button>
            ) : (
                <Button className="w-25" type="submit">Save</Button>
            )}
        </Form>
      </Container>
        )
    }
}

export default withRouter(connect(mapStateToProps, {addNote, editNote})(NoteForm))