import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NewNote extends Component {
    render() {
        return (
            <div className="text-white">
            <h1>Create Your Note</h1>    
                <input id="input1" type="text" placeholder="Title"></input>
                <div className="text-white">
                    <textarea name="textarea"
                        rows="17" cols="90" placeholder="Write something here"></textarea>
                    <Link className="button new" to="/newnote">Save</Link>
                </div>
            </div>
        )
    }
}