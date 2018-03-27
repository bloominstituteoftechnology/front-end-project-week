import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Col } from "reactstrap";
import './CreateNewNote.css';

class CreateNewNote extends Component {
    // state = {

    // };

    render() {
        return (
            <Col className='new-note'>
                <h5>Create new note:</h5>
                <form className='form'>
                    <div>
                        <input placeholder='Note Title'
                            type="text"
                            className="form-control col-6 my-3"
                        />
                    </div>
                    <div>
                        <textarea placeholder="Note Content"
                            type="text"
                            className="form-control">
                        </textarea>
                    </div>
                    <Link to='/' class='primary-btn col-3'>Save</Link>
                </form>
            </Col>
        )
    } // end render()
} // end CreateNewNote Class

export default CreateNewNote;