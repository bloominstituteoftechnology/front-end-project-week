import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const EditNote = () => {
    return (
        <div>
            <h1 className ="m-4 font-weight-bold" > EDIT NOTE :</h1>
            <Form>
                <FormGroup>
                  <Input  className = "form-control form-control-lg col-md-9" type="text" placeholder = "Note Title"/>
                </FormGroup>
                <FormGroup ClassName = "input-large">
                  <Input className = "form-control form-control-lg " style ={{"height" : "400px"}} type="textarea" placeholder = "Note Content"/>
                </FormGroup>
                <FormGroup>
                  <Button color ="info" >UPDATE</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default EditNote;