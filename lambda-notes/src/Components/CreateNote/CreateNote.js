import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../JS/actions/index-a";
import Sidebar from "../Sidebar/Sidebar";
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './CreateNote.css';
import NoteCardList from "../List/NoteCardList";

class CreateNote extends Component {

  render() {
    return(
    <div className = 'create-wrapper'>
    <Sidebar />
    <Form className = "form-wrapper">
    <h1 className = "form-part">Create Note:</h1>
        <Input type="text" name="title" id="notetitle" placeholder="Note Title" className ="input-title form-part"/>
        <Input type="textarea" name="text" id="notebody" placeholder ="Note Content" className="input-content form-part"/>
    <Link to = '/' component = {NoteCardList}><Button className = 'update-button form-part'>Save</Button></Link>
</Form>
</div>
    );
}
}
export default CreateNote;