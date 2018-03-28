import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: '',
            editDescription: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({ editTitle: '', editDescription: '' })
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="EditNoteContainer">

                <h7 className="EditHeader">Edit Note:</h7>

                <form className="EditTitleContainer">

                    <input 
                        type="text" 
                        name="editTitle" 
                        placeholder={this.state.editTitle} 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit} 
                    />
                    <input 
                        type="text"
                        name="editDescription"
                        placeholder={this.state.editDescription}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />

                    <button type="button" onClick={this.handleSubmit}>Update</button>

                </form>

            </div>
        )
    }
}

export default EditNote;