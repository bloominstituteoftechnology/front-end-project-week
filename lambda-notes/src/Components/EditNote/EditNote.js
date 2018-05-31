import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Form,  Input } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import './EditNote.css';
import NoteContainer from "../NoteContainer/NoteContainer";
import { HeaderName } from '../List/NoteCardList';

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
            <div className = 'create-wrapper'>
                <Sidebar />
                <Form className = "main-container form-create">
                    <HeaderName text="Edit Note:"/>
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
    export default EditNote;