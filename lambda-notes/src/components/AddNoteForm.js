import React from 'react';
import './AddNoteForm.css';

class AddNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: '',
            bodyText: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value});
    }

    render() {
        return(
            <div className='addNoteForm'>
                <h2>Create New Note:</h2>
                <input className='titleInput' placeholder='Note Title' name='titleText' value={this.state.titleText} onChange={this.changeHandler}/>
                <textarea className='contentInput' placeholder='Note Content' name='bodyText' value={this.state.bodyText} onChange={this.changeHandler}/>
                <button className='button' onClick={() => this.props.addNote({title: this.state.titleText, text: this.state.bodyText})}>Save</button>
            </div>
        )
    }
}

export default AddNoteForm;