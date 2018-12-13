import React from "react";
import axios from 'axios';

const url = require("../api-url.js");

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            titleText: "",
            contentText: ""
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            // .get(`https://infinite-cliffs-77240.herokuapp.com/api/notes/${id}`)
            // .get(`http://localhost:9000/api/notes/${id}`)
            .get(`${url}/api/notes/${id}`)
            .then(response => {
                this.setState({
                    note: response.data,
                    titleText: response.data.title,
                    contentText: response.data.textBody
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    typingHandler = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            note: {
                ...this.state.note,
                title: this.state.titleText,
                textBody: this.state.contentText
            }
        }, () => {
            this.props.finishEdit(this.state.note, this.props.history);
        });
    }

    render() {
        if (!this.state.note) {
            return (
                <div className="main-content">
                    <h2>(Loading)</h2>
                </div>
            );
        }
        return(
            <form className="edit-form">
                <h2>Edit Note:</h2>
                <input
                    type="text"
                    placeholder="Note Title"
                    value={this.state.titleText}
                    name="titleText"
                    onChange={this.typingHandler}
                    required
                />
                <textarea
                    placeholder="Note Content"
                    value={this.state.contentText}
                    name="contentText"
                    onChange={this.typingHandler}
                />
                <button type="submit" onClick={this.handleSubmit}>Update</button>
            </form>
        );
    }
}