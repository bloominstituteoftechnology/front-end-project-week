import React, { Component } from 'react';

class CreateNewView extends Component {
    render() {
        return(
            <div className='create-edit-view'>
                <header className='header-container'>
                    <h3 className='create-edit-header'>Create New Note:</h3>
                </header>
                <div className='form-container'>
                    <form
                        className='create-edit-form'
                        onSubmit={this.props.addNewNote}>
                        <input
                            className='title-input' 
                            onChange={this.props.handleInputChange}
                            type="text"
                            placeholder='Note Title'
                            value={this.props.title}
                            name='title'
                        />
                        <textarea 
                            className='content-input'
                            onChange={this.props.handleInputChange}
                            placeholder='Note Content' 
                            cols="90" 
                            rows="20"
                            value={this.props.textBody}
                            name='textBody'
                        ></textarea>
                        <button 
                            className='button-style'
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateNewView;
