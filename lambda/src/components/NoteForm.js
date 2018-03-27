import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';

function mapStateToProps(state) {
    return {};
}

class NoteForm extends Component {
    render() {
        return (
            <Container className="my-5">
                <h1> Create New Note:</h1>
                <Form>
                    <FormGroup>
                        <Input type="text"  
                                placeholder="Note Title" />
                    </FormGroup>
                    <FormGroup>
                        <textarea
                            className="form-control"
                            placeholder="Note Content"
                            name="textarea"
                            row="10"
                            col="50"
                        />
                    </FormGroup>
                    <Button type="submit">Save</Button>
                    </Form>
                    </Container>
        );
    }
}

export default connect(mapStateToProps)(NoteForm);