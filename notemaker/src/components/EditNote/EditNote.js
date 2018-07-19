import React, { Component } from 'react';
import './EditNote.css';
import { Link } from 'react-router-dom';

class EditNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: props.initialData.notes
        }
    }    

    editHandler = (state) => {
        Object.assign({}, state, { note: document.getElementById("note-content") });
        console.log(this);
    }

    changeHandler = (e) => {
        let currentInput = { ...this.state.note };
        currentInput[e.target.name] = e.target.value;
        this.setState({ note: currentInput });
    }

    render() {
        console.log(this.props.initialData.notes[this.props.match.params.id].title)
        return (
            <div className="new-note">
                <h3>Edit Note:</h3>
                <input 
                className="note-title" 
                placeholder="Note Title"
                name="title" 
                defaultValue={this.props.initialData.notes[this.props.match.params.id].title}
                onChange={this.changeHandler}
                ></input>
                <br />
                <textarea 
                className="note-content" 
                placeholder="Note Content" 
                name="content"
                defaultValue={this.props.initialData.notes[this.props.match.params.id].content}
                onChange={this.changeHandler}
                ></textarea>

                <Link to="/">
                    <div className="note-save-button"
                    onClick={() => this.editHandler}
                    >
                        <div className="update-link-text">Update</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default EditNote;