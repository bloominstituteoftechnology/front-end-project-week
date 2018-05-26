import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NewNote extends Component {
    render() {
        return (
            <div className="text-white">
            <h1>Create New Note:</h1>    
                <input id="input1" type="text" size="45" placeholder="Note Title"></input>
                <div className="text-white">
                    <textarea className="textarea" name="textarea"
                        rows="17" cols="90" placeholder="Note Content"></textarea>
                    <Link className="button save" to="/">Save</Link>
                </div>
            </div>
        )
    }
}