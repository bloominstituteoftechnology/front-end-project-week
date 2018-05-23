import React from 'react';
import React, { Component } from 'react';
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
                <Button className="UpdateButton">Update</Button>
            </Form >

        );
};
 // not sure if proptypes inclusion needed.   
Button.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string
}

    export default EditNote;