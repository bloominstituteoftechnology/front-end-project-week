import React, { Component } from "react";
import { Popover, PopoverBody } from "reactstrap";
import { Redirect } from "react-router-dom";
import "./CreateNote.css";
import Navigation from "../Navigation/Navigation";
import { addNote } from "../../actions";
import { connect } from "react-redux";

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            text: "",
            // redirect: false,
            titleLimit: 20,
            textLimit: 1000
        }
        this.titlePopOverOpen = false;
        this.textPopOverOpen = false;
    }

    handleOnSubmit = (event) => {
        this.props.addNote({ title: this.state.title, text: this.state.text })
        // this.setState({ redirect: true })

        event.preventDefault();
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
        this.textPopOverOpen = !this.textPopOverOpen;
    }

    toggleTextOut = () => {
        this.setState({ textLimit: null })
    }

    render() {
        console.log('Create Note This Props Note Length', this.props.notes.length);
        console.log('Create Note This Props Redirect', this.props.redirect);
        return (
            <div className="createNoteContainer">
                <Navigation />
                <div className="createNoteCardContainer">
                    <h4>Create New Note:</h4>
                    <form onSubmit={this.handleOnSubmit}>
                        <input id="titlePopOver" type="text" name="title" maxLength="20" placeholder="Note Title" value={this.state.title} onChange={this.handleOnChange} required />
                        <textarea id="textPopOver" name="text" rows="15" cols="50" maxLength="1000" placeholder="Note Content" value={this.state.text} onChange={this.handleOnChange} required></textarea>
                        <input type="submit" value="Save" className="submit" />
                    </form>
                    {this.props.redirect ? (<Redirect to={`/notes/${this.props.notes.length - 1}`} />) : null}
                    {this.state.title.length === this.state.titleLimit ? this.toggleTitleLimit() : this.titlePopOverOpen === false}
                    {this.state.text.length === this.state.textLimit ? this.toggleTextLimit() : this.textPopOverOpen = false}
                    <Popover placement="bottom" isOpen={this.titlePopOverOpen} target="titlePopOver" toggle={this.toggleTitleOut}>
                        <PopoverBody><div className="exclamation">!</div> You have reached the maximum limit of characters you can type for the note title.</PopoverBody>
                    </Popover>
                    <Popover placement="bottom" isOpen={this.textPopOverOpen} target="textPopOver" toggle={this.toggleTextOut}>
                        <PopoverBody><div className="exclamation">!</div> You have reached the maximum limit of characters you can type for the note content.</PopoverBody>
                    </Popover>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            notes: state.notes,
            redirect: state.redirect
        }
    )
}

export default connect(mapStateToProps, { addNote })(CreateNote); 