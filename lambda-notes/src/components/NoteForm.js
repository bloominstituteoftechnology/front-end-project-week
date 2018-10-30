import React from 'react';
import { createNote } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class NoteForm extends React.Component {
    state = {
        title: '',
        textBody: ''
    };

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
};

newNoteHandler = event => {
    event.preventDefault();
    const {title, textBody} = this.state;
    this.props.createNote({title, textBody});
    this.setState({ title: '', textBody: '' })
}

render() {
    return (
        <div>
        <Form onSubmit = { this.newNoteHandler } className="note-form">
        <FormGroup>
          <Input 
            type='text'
            value={ this.state.title }
            name='title'
            placeholder='title'
            onChange={ this.changeHandler } />
        </FormGroup>
        <FormGroup>
          <Input
            type='textarea'
            value={ this.state.textBody }
            name='textBody'
            placeholder='note text'
            onChange={ this.changeHandler }
          />
        </FormGroup>
        <Button onClick = { this.newNoteHandler }>Submit</Button>
      </Form>
        </div>
    )
}}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingNote: state.noteReducer.creatingNote
        
    };
};

export default connect(mapStateToProps, { createNote })(NoteForm);