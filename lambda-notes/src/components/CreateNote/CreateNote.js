import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateNote.css";
import Navigation from "../Navigation/Navigation";

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="createNoteContainer">
                <Navigation />
                <div className="createNoteCardContainer">
                    <h4>Create New Note:</h4>
                    <input type="text" name="title" placeholder="Note Title" value={this.state.title} onChange={this.handleOnChange} />
                    <textarea name="text" rows="15" cols="50" maxLength="1000" placeholder="Note Content" value={this.state.text} onChange={this.handleOnChange}></textarea>
                    <Link to="/"><button onClick={() => this.props.addNote({ title: this.state.title, text: this.state.text })}>Save</button></Link>
                </div>
            </div>
        )
    }
}

export default CreateNote; 