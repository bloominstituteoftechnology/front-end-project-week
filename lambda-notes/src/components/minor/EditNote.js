import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: this.props.secondProps.mainProps.noteArray[
                this.props.secondProps.match.params.id
            ],
            title: this.props.secondProps.mainProps.noteArray[
                this.props.secondProps.match.prams.id
            ].title,
            content: this.props.secondProps.mainProps.noteArray[
                this.props.secondProps.match.params.id
            ].content
        };        
    }

    render() {
        return (
            <div className="note-editor">
                <h1 className="note-creator">
                    Note Editor
                </h1>
                <div className="edit-note-container">
                    <div classname="edit-input-title">
                        <input
                            className="form-control"
                            type="text"
                            placeHolder="Title"
                            name="title"
                            value={this.state.title}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className="edit-input-content">
                        <textarea
                            className="form-control"
                            type="text"
                            placeHolder="Type your note"
                            name="content"
                            rows="10"
                            value={this.state.content}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className="edit-save-button">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <button
                                onClick={() => {
                                    this.props.secondProps.mainProps.editNote(
                                        {
                                            title: this.state.title,
                                            content: this.state.content
                                        },
                                        this.props.secondProps.match.params.id
                                    );
                                    this.setState({ title: "", content: "" });
                                }}
                            >
                            Update Note
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNote;