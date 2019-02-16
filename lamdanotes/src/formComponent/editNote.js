import React from 'react';

class EditForm extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: {
                textBody: "",
                title: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            notes: {
                ...this.state.notes,
                [e.target.name]: e.target.value
            }
        });
    }

    sendAndReset = (id, obj) => {
        this.props.editNote(this.state.notes);
        this.setState({
            notes: {
                textBody: "Note Body",
                title: "Note Title"
            }
        });
    }

    render() {
        return (
            <div className="editForm">
                <h3 className="formTitles">Edit Note:</h3>
                <input 
                    className="addTitle"
                    type="text" 
                    name="title"
                    onChange={this.handleChange}
                    placeholder="Note Title"
                    value={this.state.notes.title}    
                />
                <textarea
                    name="textBody"
                    className="addBody"
                    onChange={this.handleChange}
                    placeholder="Note Body"
                    value={this.state.notes.textBody}
                />

                <button className="modalButtons">Update</button>
            </div>
        )
    }
}

export default EditForm