import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EditNote extends Component {
    render() { 
        return(
            <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        )
        
  }

}
 
export default EditNote;