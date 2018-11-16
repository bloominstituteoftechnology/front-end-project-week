import React, {Component} from "react";
import {Link} from "react-router-dom";

class ViewNote extends Component {
    state = {
        note: null,
        id: null
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        let note = this.props.notes[id]; //pick out note that corresponds to ID in URL

        this.setState({ //set note to state
            note: note,
            id: id
        });
    };

    handleModal = event => {
        event.preventDefault();

        document.getElementById("delete-modal").classList.toggle("hidden");
    }

    render() {
        return (
            <div>
                {this.state.note ? ( //only display note after note is set to state, otherwise display error message
                    <div>
                        <div id="delete-modal" className="hidden">
                            <p>Are you sure you want to delete this?</p>
                            <button onClick={this.handleModal}>Yes</button>
                            <button onClick={this.handleModal}>No</button>
                        </div>
                        <div>
                            <Link to={`/view/${this.state.id}/edit`}>Edit</Link>
                            <a href="##" onClick={this.handleModal}>Delete</a>
                        </div>
                        <h3>{this.state.note.title}</h3>
                        <p>{this.state.note.text}</p>
                    </div>
                ) : "Note not found."}
            </div>
        );
    };
};

export default ViewNote;