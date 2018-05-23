import React from 'react';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const NewNotes = () => {
    
    return (
        <Form>
            <FormGroup>
                <Label for="newNote"><h3>Create New Note</h3></Label>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Note Title</Label>
                <Input type="newnote" name="newnote" id="newNote" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="Text">Note Content</Label>
                <Input type="textarea" name="text" id="areaText" />
            </FormGroup>
            <Button className="SaveButton">Save</Button>
        </Form >

    );
};


    export default NewNotes;