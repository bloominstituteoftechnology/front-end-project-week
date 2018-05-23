import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateNote = () => {
    return (
        <div>
            <h1 className ="m-4 font-weight-bold" > CREATE NEW NOTE :</h1>
            <Form>
                <FormGroup>
                  <Input  className = "form-control form-control-lg col-md-9" type="text" placeholder = "Note Title"/>
                </FormGroup>
                <FormGroup ClassName = "input-large">
                  <Input className = "form-control form-control-lg " type="textarea" placeholder = "Note Content"/>
                </FormGroup>
                <FormGroup>
                  <Button color ="info" >SAVE</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default CreateNote;