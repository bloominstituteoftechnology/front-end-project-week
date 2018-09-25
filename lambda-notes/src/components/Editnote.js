import React from 'react';
import axios from 'axios';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        };
    }

    editNote = () => {
        axios
            .post("https://killer-notes.herokuapp.com/note/create", this.state)
            .then(
                this.setState({ title: '', text: '' })
            )
            .catch(error => console.log(error));
        this.props.history.push("/")
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
                        name="text"
                        value={this.state.text}
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



