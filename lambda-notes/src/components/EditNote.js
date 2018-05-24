import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const EditNote = () => {

        return (
            <Form>
                <FormGroup>
                    <Label for="editNote"><h3>Edit Note:</h3></Label>
                </FormGroup>
                <FormGroup>
                    <Label for="editNote">Note Title</Label>
                    <Input type="textarea" name="text" id="newNote" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="Text">Note Content</Label>
                    <Input type="textarea" name="text" id="areaText" />
                </FormGroup>
                <Button className="UpdateButton" onClick={this.toggle}>Update</Button>
            </Form >

        );
};
 

    export default EditNote;