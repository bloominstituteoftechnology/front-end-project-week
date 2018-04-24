import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreateNote = () => {
    return (
        <div className="APP__CREATE-NOTE">
            <h4>Create New Note:</h4>
            <div className="APP__CREATE-CONTAINER">
                <Form className="APP__CREATE-FORM">
                    <Input className="APP__CREATE-TITLE" type="text" placeholder="Note Title" />
                    <Input className="APP__CREATE-CONTENT" type="textarea" name="text" placeholder="Note Content" />
                
                    <Button className="APP__CREATE-SAVE">Save</Button>
                </Form>
            </div>
        </div>
    );
};

export default CreateNote;