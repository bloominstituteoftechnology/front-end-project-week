import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Link } from 'reactstrap';



const NewNotes = () => {
    
    return (
    <div className="container">
            <div className="Notes-sidebar" style="width:25%" >
                <div className="SideBarTitle" >
                    <h1 className="Notes-bar-item1" > Lambda </h1>
                    <h1 className="Notes-bar-item2" > Notes </h1>
                </div>
            </div>
            <Link to="/" > <button type="button" className="Notes-bar-item notes-button1"> View Your Notes </button></Link >
            <Link to="/newnotes" > < button type="button" className="Notes-bar-item notes-button2"> +Create New Note </button></Link >

        <Form>
            <FormGroup>
                <Label for="newNote"><h3>Create New Note:</h3></Label>
            </FormGroup>
            <FormGroup>
                <Label for="noteTitle">Note Title</Label>
                <Input type="newnote" name="newnote" id="newNote" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="Text">Note Content</Label>
                <Input type="textarea" name="text" id="Text" />
            </FormGroup>
            <Button className="SaveButton">Save</Button>
        </Form >
    </div> 
    );
};


    export default NewNotes;