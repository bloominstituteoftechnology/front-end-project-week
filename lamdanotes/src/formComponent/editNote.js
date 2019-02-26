import React from 'react';
import axios from 'axios';

//props from app.js
//{...props} notes={this.state.notes} cNote={this.state.cNote} editNote={this.editNote}

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
    
    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.cNote}`)
                .then(res => {
                    console.log("CDM FROM EDIT:", res)
                    this.setState({
                        notes: {
                            textBody: res.data.textBody,
                            title: res.data.title
                        }
                    })
                })
                .catch(err => console.log(err))
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
        this.props.editNote(this.props.cNote, this.state.notes);
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

                <button 
                    className="modalButtons"
                    onClick={this.sendAndReset}
                    >Update</button>
            </div>
        )
    }
}

export default EditForm 