import React from "react";


class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        };
    }

    handleCreateNote = event => {
       event.preventDefault();
       this.props.onSubmit(this.state);
       this.setState({ title: '', textBody: '' });
       this.props.history.push('/');
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className='add-note'>
                <form onSubmit={this.handleCreateNote}>
                <h2>Create New Note:</h2>
                <input 
                    type='text'
                    name='title'
                    placeholder='Note Title'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    required
                />
                <textarea 
                    name='textBody'                    
                    placeholder='Note Content'
                    value={this.state.textBody}
                    onChange={this.handleInputChange}
                    required
                />
                <button className='btn' type='submit'>Save</button>
                </form>
            </div>
        );
    }

    
}

export default AddNote;