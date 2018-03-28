import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import { addNote } from '../Actions';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
    return {};
}

class NoteForm extends Component {
    constructor() {
        super();
        this.state = {
            newNote: {
            title: "",
            note: ""
            }
        };
    }

    handleOnChange(event) {
        event.preventDefault();
        let noteCopy = this.state.newNote;
        noteCopy[event.target.name] = event.target.value;
        this.setState({ newNote: noteCopy });
    }

    handleOnSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Container className="my-5">
                <h3 className="header my-4"> Create New Note:</h3>
                <Form>
                    onSubmit={this.handleOnSubmit.bind(this)}
                    onChange={this.handleOnChange.bind(this)}
                    >
                    <FormGroup>
                        <Input 
                                className="w-50"
                                type="text"  
                                placeholder="Note Title"
                                value={this.state.newNote.title}
                                name="title"
                        />
                    </FormGroup>
                    <FormGroup>
                        <textarea
                            className="form-control"
                            placeholder="Note Content"
                            name="textarea"
                            row="10"
                            col="50"
                            value={this.state.newNote.note}
                        />
                    </FormGroup>
                    <Button className="w-25" type="submit">
                       Save
                    </Button>
                    </Form>
                    </Container>
        );
    }
}

export default withRouter(connect(mapStateToProps, { addNote })(NoteForm));