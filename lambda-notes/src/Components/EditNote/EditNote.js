import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import './EditNote.css';

class EditNote extends Component {
    render() { 
        return(
            <div className = 'edit-wrapper'>
            <Sidebar />
            <Form className = "form-wrapper">
            <h1 className = "form-part">Edit Note:</h1>
                <Input type="text" name="title" id="notetitle" placeholder="Note Title" className ="input-title form-part"/>
                <Input type="textarea-lg" name="text" id="notebody" placeholder ="Note Content" className="input-content form-part"/>
            <Button className = 'update-button form-part'>Update</Button>
        </Form>
        </div>
        )
        
  }

}
 
export default EditNote;