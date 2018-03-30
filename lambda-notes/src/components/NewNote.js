import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class NewNote extends Component {
    render() {
        return (
            <div className="CreateNote">
                <h3> Create New Note: </h3>
                <Form>
                    <FormGroup>
                        <Input type="textarea" className="NoteBoxTitle" name="NewNote" placeholder="&nbsp;&nbsp;&nbsp;Note Title" />
                        </FormGroup>
                        <FormGroup>
                   <Input type="textarea" className="NoteBoxContent" name="NoteContent" placeholder="&nbsp; &nbsp;&nbsp;Note Content" id="NoteContent" />
        
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </div>
        )
    }
}


