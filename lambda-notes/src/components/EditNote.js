import React, { Component } from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';


class EditNote extends Component {
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
                            <h1 className="Notes-bar-item1" >Lambda</h1>
                            <h1 className="Notes-bar-item2" >Notes</h1>

                            <a href="/" >
                                <button type="button" className="Notes-button-one">
                                    View Your Notes
            </button>
                            </a>
                            <a href="/newnotes" >
                                <button type="button" className="Notes-button-two">
                                    + Create New Note
            </button>
                            </a>
                        </div>
                    </div>
                    <div className="EditNote">
                        <h2>Edit Note:</h2>
                        <div className="NoteTitle">
                            <form action="/action_page.php">
                                <label for="ntitle"></label>
                                <input type="text" id="ntitle" name="notetitle" placeholder="Note Title" />
                            </form>
                        </div>
                        <form>
                            <textarea> Note Content </textarea>
                        </form>
                        <a href="/editnote" >
                            <button type="button" className="UpdateButton">
                                Update
                        </button>
                        </a>

                    </div>

                </div>


            );
        }
};
    

    export default EditNote;