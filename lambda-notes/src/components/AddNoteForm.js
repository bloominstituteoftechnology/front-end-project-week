import React from 'react';

class AddNoteForm extends React.Component {
    constructor() {
        super();
        this.state = {
            titleText: '',
            bodyText: ''
        }
    }

    render() {
        return(
            <div className='addNoteForm'>
                <h2>Create New Note:</h2>
                <input placeholder='Note Title' name='titleText' value={this.state.titleText} />
                <input placeholder='Note Content' name='bodyText' value={this.state.bodyText} />
                <div>Save</div>
            </div>
        )
    }
}

export default AddNoteForm;