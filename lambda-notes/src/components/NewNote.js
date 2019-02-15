import React , { Component } from 'react';

import axios from 'axios';

import { Link } from "react-router-dom";

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            textBody:""
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addNote = e => {
        // const note = {this.state}
        console.log(this.state)
        // e.preventDefault();
        if(this.state.title === "" || this.state.textBody === "") {
            alert("Cannot be blank")
        }
        else {
            axios
                .post("https://fe-notes.herokuapp.com/note/create", this.state )
                .then(response => {
                    // console.log(response)
                    // console.log(this.state.history)
                    this.state.history.push('/')
                    
                })
                .catch(error => {
                    console.log(error)
                })
        }
        // console.log(this.state)
        this.setState({
            title:"",
            textBody:""
        })
    }

    render() {
        return (
            <div>
                <h2>Create new note</h2>
                <form onSubmit={this.addNote}>
                    <input
                        onChange ={this.handleInputChange}
                        type="text"
                        placeholder= "Note Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input
                        onChange ={this.handleInputChange}
                        type="text"
                        placeholder= "New Content"
                        value={this.state.textBody}
                        name="textBody"
                    />
     
                    <Link to="/">
                        <button type="submit">Save</button>
                    </Link>
          
                </form>
            </div>
        )
    }
}