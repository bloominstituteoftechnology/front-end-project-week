import React from 'react';
import axios from 'axios';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            textBody: this.props.location.state.textBody,
        };
    }

    editNote = () => {
        const id = this.props.location.state._id
        axios
            .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, this.state)
            .then(() =>
                this.props.history.push(`/notes/${id}`)
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
                <div className='header'><h4>Edit Note:</h4></div>
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
                    <button className="add-button" onClick={this.editNote}>Update</button>
                </div>

            </div>
        )
    }
}

export default EditNote;

