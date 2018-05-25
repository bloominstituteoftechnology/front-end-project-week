import React, { Component } from "react";
import { Popover, PopoverBody } from "reactstrap";
import { Redirect } from "react-router-dom";
import "./EditNote.css";

class EditNoteCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.note.title,
            text: props.note.text,
            redirect: false,
            titleLimit: 20,
            textLimit: 1000
        }
        this.titlePopOverOpen = false;
        this.textPopOverOpen = false;
    }

    handleOnSubmit = () => {
        this.props.modifyNote(this.props.id, { title: this.state.title, text: this.state.text })
        this.setState({ redirect: true })
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    toggleTitleLimit = () => {
        this.titlePopOverOpen = !this.titlePopOverOpen;
    }

    toggleTitleOut = () => {
        this.setState({ titleLimit: null })
        this.titlePopOverOpen = false;
    }

    toggleTextLimit = () => {
        this.textPopOverOpen = !this.titlePopOverOpen;
    }

    toggleTextOut = () => {
        this.setState({ textLimit: null })
        this.textPopOverOpen = !this.textPopOverOpen;
    }

    render() {
        return (
            <div className="editNoteCardContainer">
                <h4>Edit Note:</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <input id="titlePopOver" type="text" name="title" maxLength="20" value={this.state.title} onChange={this.handleOnChange} required />
                    <textarea id="textPopOver" name="text" rows="15" cols="50" maxLength="1000" value={this.state.text} onChange={this.handleOnChange} required />
                    <input type="submit" value="Update" className="submit" />
                </form>
                {this.state.redirect ? (<Redirect to="/" />) : null}
                {this.state.title.length === this.state.titleLimit ? this.toggleTitleLimit() : this.titlePopOverOpen = false}
                {this.state.text.length === this.state.textLimit ? this.toggleTextLimit() : this.textPopOverOpen = false}
                <Popover placement="bottom" isOpen={this.titlePopOverOpen} target="titlePopOver" toggle={this.toggleTitleOut}>
                    <PopoverBody><div className="exclamation">!</div> You have reached the maximum limit of characters you can type for the note title.</PopoverBody>
                </Popover>
                <Popover placement="bottom" isOpen={this.textPopOverOpen} target="textPopOver" toggle={this.toggleTextOut}>
                    <PopoverBody><div className="exclamation">!</div> You have reached the maximum limit of characters you can type for the note content.</PopoverBody>
                </Popover>
            </div>
        )
    }
}

export default EditNoteCard; 