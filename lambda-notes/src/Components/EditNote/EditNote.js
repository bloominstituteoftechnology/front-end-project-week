import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Form,  Input } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import './EditNote.css';
import NoteCardList from "../List/NoteCardList";

class EditNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() { 
        return(
            <div className = 'edit-wrapper'>
            <Sidebar />
            <Form className = "form-wrapper">
            <h1 className = "form-part">Edit Note:</h1>
                <Input type="text" name="title" id="notetitle" placeholder="Note Title" className ="input-title form-part"/>
                <Input type="textarea-lg" name="text" id="notebody" placeholder ="Note Content" className="input-content form-part"/>
            <Link to = '/' component = {NoteCardList}>
                <Button className = 'update-button form-part'>Update</Button>
            </Link>
        </Form>
        </div>
        )
        //this probably should take the data from the note class and consume it so they can truly edit it
        
        
  }

}
 
export default EditNote;
