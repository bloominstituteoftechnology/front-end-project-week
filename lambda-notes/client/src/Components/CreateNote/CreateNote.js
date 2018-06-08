import React, { Component } from "react";
import { createNote } from "../../JS/actions/index-a";
import Sidebar from "../Sidebar/Sidebar";
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HeaderName } from '../NoteCard/NoteCard';
import './CreateNote.css';
import NoteCardList from "../List/NoteCardList";
import NoteContainer from "../NoteContainer/NoteContainer";

class CreateNote extends Component {

  render() {
    return(
        <div className = 'create-wrapper'>
            <Sidebar />
            <Form className = "main-container form-create">
                <HeaderName text="Create New Note:"/>
                
                    <Input 
                        type="text" 
                        name="title" 
                        id="notetitle" 
                        placeholder="Note Title" 
                        className ="input-title form-part"
                        /*onChange for each of these inputs to come later*/
                        />
                        <br/>
                        <br/>
                    <Input 
                        type="textarea" 
                        name="text" 
                        id="notebody" 
                        placeholder ="Note Content" 
                        className="input-content form-part"
                        /*onChange for each of these inputs to come later*/

                        />
                    <Button className = 'button-save'>
                        <Link to = '/' component = {NoteContainer} className="link">
                        {/* /*onSubmit for this button to come later*/}

                        Save
                        </Link>
                    </Button>
            </Form>
        </div>
            );
    }
}
export default CreateNote;