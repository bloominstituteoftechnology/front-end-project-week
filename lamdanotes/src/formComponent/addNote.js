import React, { Component } from 'react';


//passed as props:
//{...props} addNote={this.addNote}

class AddNote extends Component {
    constructor(props) {
      super(props);
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

    sendAndReset = e => {
        this.props.addNote(this.state.notes);
        this.setState({
            notes: {
                textBody: "Note Body",
                title: "Note Title"
            }
        });
    }

    render() {
        console.log('Props from addForm', this.props)
        console.log('State from addForm', this.state)
        return(
            <div className="addForm">
                <h3>Create New Note:</h3>
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

                <button
                    onClick={() => {this.sendAndReset()}} 
                    className="addButton">Save</button>
            </div>
        )
    }
}

export default AddNote