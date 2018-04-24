import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./CreateNote.css"
class CreateNote extends Component {
    constructor() {
        super();
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
        return e.target.value;
      }

    render() {
        return (
            <div className="body">
                <SideBar/>
                <div className = "create">
                    <h1>Create New Note:</h1>
                    <input onChange={this.handleInputChange} type="text" placeholder="Note Title" name="title"/>
                    <textarea onChange={this.handleInputChange} name="content" cols="118" rows="10" placeholder="Note Content"></textarea>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}

export default CreateNote
