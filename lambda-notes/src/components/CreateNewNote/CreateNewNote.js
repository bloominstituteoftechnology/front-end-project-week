import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './CreateNewNote.css';

class CreateNewNote extends Component {
    // state = {

    // };

    render() {
        return (
            <div class='col'
                style={{backgroundColor: '#f2f1f2'}}>
                <h4 class='col-12'>Create new note:</h4>
                <form class='col-12'>
                    <div class='col-5 p-0'>
                        <input placeholder='Note Title'
                            type="text"
                            class="form-control"
                        />
                    </div>
                    <div class='col-9 p-0'>
                        <textarea placeholder="Note Content"
                            type="text"
                            class="form-control">
                        </textarea>
                    </div>
                    <Link to='/' class='btn-primary col-4'>Save</Link>
                </form>
            </div>
        )
    } // end render()
} // end CreateNewNote Class

export default CreateNewNote;