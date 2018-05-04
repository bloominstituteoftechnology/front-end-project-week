import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class NoteListView extends Component {
    render() {
        return(
            <Form>
                <FormGroup>
                <Input type='text' name='Note Title' id='note-title' placeholder="Note Title" />
                    <Input type='text' name='Note text' id='note-text' placeholder="Note Text" />
                </FormGroup>
            </Form>
        )
    }


}












