import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditNote.css";

class EditNoteCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.note.title,
            text: props.note.text,
        }
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="editNoteCardContainer">
                <h4>Edit Note:</h4>
                <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
                <textarea name="text" rows="15" cols="50" maxLength="1000" value={this.state.text} onChange={this.handleOnChange} />
                <Link to="/"><button onClick={() => this.props.modifyNote(this.props.id, { title: this.state.title, text: this.state.text })}>Update</button></Link>
            </div>
        )
    }
}

export default EditNoteCard; 