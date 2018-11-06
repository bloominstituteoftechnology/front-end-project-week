
import React from 'react';
import axios from 'axios';
import './createNewView.css';

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            textBody: ""
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateNote = event => {
        this.props.addNote(event, this.state);
        this.setState({ title: "", textBody: "" })
        this.props.history.push("/")
    }


    render() {

        return (
            <div className="container">
                <div className="notes-header">
                    <h3>Edit Note:</h3>
                </div>
                <form onSubmit={this.createNote}>
                    <input
                        className="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Title'
                    />
                    <input
                        className="content"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Content'
                    />

                    <button className="button">Save</button>
                </form>
            </div>
        );
    }
}



export default Edit;