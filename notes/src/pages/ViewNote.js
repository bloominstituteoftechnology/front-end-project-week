import React, {Component} from "react";
import {Link} from "react-router-dom";

class ViewNote extends Component {
    state = {
        note: null,
        id: null
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        let note = this.props.notes.find(note => note._id === id); //pick out note that corresponds to ID in URL

        this.setState({ //set note to state
            note: note,
            id: id
        });
    };

    handleModal = event => {
        event.preventDefault();

        document.getElementById("delete-modal").classList.toggle("hidden");
    }

    handleDelete = () => {
        this.props.delete(this.state.id);
    };

    render() {
        return (
            <div>
                {this.state.note ? ( //only display note after note is set to state, otherwise display error message
                    <div>
                        <div id="delete-modal" className="hidden modal-container">
                            <div className="modal">
                                <p className="view-note-body-font">Are you sure you want to delete this?</p>
                                <div className="button-container">
                                    <button className="button red" onClick={this.handleDelete}>Delete</button>
                                    <button className="button" onClick={this.handleModal}>Cancel</button>
                                </div>
                            </div>
                        </div>

                        <div className="view-note">
                            <div className="link-container">
                                <Link className="link-font" to={`/view/${this.state.id}/edit`}>edit</Link>
                                <a className="link-font" href="##" onClick={this.handleModal}>delete</a>
                            </div>
                            <h3 className="subtitle-font title">{this.state.note.title}</h3>
                            <p className="view-note-body-font">{this.state.note.textBody}</p>
                        </div>
                    </div>
                ) : "Note not found."}
            </div>
        );
    };
};

export default ViewNote;