import React from 'react';
import axios from 'axios';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        };
    }

    addNote = event => {
        event.preventDefault();
        axios
            .post("https://killer-notes.herokuapp.com/note/create", this.state)
            .then(response => {
                console.log(response);
                this.props.history.push("/")
            }
            )
            .catch(error => console.log(error));
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='create-container'>
                <div className='header'><h4>Add New Note:</h4></div>
                <form className='create-form'> 
                    <input
                        type="text"
                        className="create-name"
                        placeholder='Note Name'
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.title}
                    />
                    <input
                        type="text"
                        className="create-text"
                        placeholder='Note Info'
                        onChange={this.handleChange}
                        name="textBody"
                        value={this.state.textBody}
                    />
                </form>
                <div>
                    <button className="add-button" onClick={this.addNote}>Add</button>
                </div>

            </div>
        )
    }
}

export default CreateNote;
