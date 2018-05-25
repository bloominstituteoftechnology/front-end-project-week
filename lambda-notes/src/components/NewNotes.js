import React, { Component } from 'react';
import '../App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { Link } from 'react-router-dom';



class NewNotes extends Component {
    constructor(props) {
        super();
        this.state = {
            
        };
    }
    render(){
        return (
            <div className="container">


                <div className="Notes-sidebar">
                    <div className="SideBarTitle" >
                        <h1 className="Notes-bar-item1" > Lambda </h1>
                        <h1 className="Notes-bar-item2" > Notes </h1>

                        <a href="/notes" >
                            <button type="button" className="Notes-button-one">
                                View Your Notes
            </button>
                </a>
                <a href="/noteview" >
                <button type="button" className="Notes-button-two">
                    + Create New Note
            </button>
                </a>
                    </div>
                </div>
                <div className="NewNote">
                    <h2>Create New Note:</h2>
                    <div className="NoteTitle">
                        <form action="/action_page.php">
                            <label for="ntitle"></label>
                            <input type="text" id="ntitle" name="notetitle" placeholder="Note Title" />
                        </form>
                    </div>
                    <form>
                        <textarea> Note Content </textarea>
                    </form>
                    <a href="/newnotes" >
                        <button type="button" className="SaveButton">
                            Save
                        </button>
                    </a>

                </div>

            </div>

    
    );
    }
};


    export default NewNotes;