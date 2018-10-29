import React from 'react';
import axios from 'axios';

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

    saveAndRedirect = () => {
        axios
            .post('https://fe-notes.herokuapp.com/note/create', 
                {title: this.state.titleText, 
                textBody: this.state.bodyText})
            .then(response => console.log(response))
            .catch(error => console.log(error));
        
    }

    render() {
        return(
            <div className='addNoteForm'>
                <h2>Create New Note:</h2>
                <input placeholder='Note Title' name='titleText' value={this.state.titleText} onChange={this.changeHandler}/>
                <input placeholder='Note Content' name='bodyText' value={this.state.bodyText} onChange={this.changeHandler}/>
                <div onClick={this.saveAndRedirect}>Save</div>
            </div>
        )
    }
}

export default AddNoteForm;