import React from 'react';

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
                <input placeholder='Note Title' name='titleText' value={this.state.titleText} onChange={this.changeHandler}/>
                <input placeholder='Note Content' name='bodyText' value={this.state.bodyText} onChange={this.changeHandler}/>
                <div onClick={() => this.props.addNote({title: this.state.titleText, textBody: this.state.bodyText})}>Save</div>
            </div>
        )
    }
}

export default AddNoteForm;