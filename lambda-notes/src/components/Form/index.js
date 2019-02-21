import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

const url = `https://fe-notes.herokuapp.com/note`;

class Form extends Component {
    state = {
        isEditing: false,
        note: null,
        title: "",
        textBody: ""
    };

    // LOGIC FOR RECOGNIZING USER INPUT
    recognizeInputChange = event => {
        console.log("input recognized");
        this.setState({ [event.target.name]: event.target.value });
    };

    // LOGIC FOR CREATING A NEW NOTE TO THE SERVER
    recognizeFormSubmit = event => {
        event.preventDefault();
        const { title, textBody } = this.state;


        axios
        .post(`${url}/create`, { title, textBody })
        .then(response => {
            this.setState({
            title: "",
            textBody: ""
            });
            this.props.history.push("/");
        })
        .catch(error => {
            console.log(error);
        });
    };

    render() {

        console.log('props', this.props)
        // LOGIC TO ALLOW 'DISPLAY' AND 'BUTTON' TEXT TO BE DYNAMIC
        const heading = this.props.type === "new" ? "Create New Note" : "Edit Note";
        const buttonName = this.props.type === "new" ? "Save" : "Update";
        return (
        <div className="form-container">
            <h2 className="form-header">{heading}</h2>
            <form className="newNote-container"
            onSubmit={this.props.type === "new" ?
                this.recognizeFormSubmit :
                this.props.recognizeFormSubmit}>
            <input
                className="note-title"
                type="text"
                name="title"
                maxLength="35"
                placeholder="Note Title"
                value={this.props.type === "new" ?
                this.state.title :
                this.props.title}
                onChange={this.props.type === "new" ?
                this.recognizeInputChange :
                this.props.recognizeInputChange}
            />
            <textarea
                className="note-content"
                type="text"
                name="textBody"
                placeholder="Your Note Here"
                value={this.props.type === "new" ?
                this.state.textBody :
                this.props.textBody}
                onChange={this.props.type === "new" ?
                this.recognizeInputChange :
                this.props.recognizeInputChange}
            />
            <button className="button">
                {buttonName}
            </button>
            </form>
        </div>
        );
    }
}

export default Form;