import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditNote.css";

class EditNoteCard extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            text: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if (!this.state.note) {
            return <div>Loading note information...</div>
        }
        return (
            <div className="editNoteCardContainer">
                <h4>Edit Note:</h4>
                <input type="text" name="title" placeholder={this.props.note.title} value={this.state.title} onChange={this.handleOnChange} />
                <textarea name="text" rows="15" cols="50" maxLength="1000" placeholder={this.props.note.text} value={this.state.text} onChange={this.handleOnChange} />
                <Link to="/"><button onClick={() => this.props.modifyNote(this.props.id, { title: this.state.title, text: this.state.text })}>Update</button></Link>
            </div>
        )
    }
}

export default EditNoteCard; 