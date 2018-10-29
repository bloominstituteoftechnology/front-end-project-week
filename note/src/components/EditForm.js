import React, { Component} from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: ''
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='edit-Container'>
                <h2>Edit Note:</h2>
                <input 
                    name='title'
                    placeholder='Note Title'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />
                <input 
                    name='textBody'
                    placeholder='Note Content'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />

                <button>Update</button>
            </div>
        )
    }
}

export default EditForm;