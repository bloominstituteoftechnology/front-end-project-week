import React from 'react';
import './EditNoteForm.css';
    
class EditNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: this.props.expandedNote.title,
            bodyText: this.props.expandedNote.text
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className='editNoteForm'>
                <h2>Edit Note:</h2>
                <input className='titleInput' type='text' onChange={this.changeHandler} name='titleText' value={this.state.titleText} placeholder='Note Title'/>
                <textarea className='contentInput' type='text' onChange={this.changeHandler} name='bodyText' value={this.state.bodyText} placeholder='Note Content'/>
                <button className='button' onClick={() => this.props.editNote({title: this.state.titleText, text: this.state.bodyText})}>Update</button>
            </div>
        )
    }
}

export default EditNoteForm;
