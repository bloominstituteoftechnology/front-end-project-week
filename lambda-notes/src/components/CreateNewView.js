import React, { Component } from 'react';

class CreateNewView extends Component {
    render() {
        return(
            <div className='create-edit-view'>
                <h3 className='create-edit-header'>Create New Note:</h3>
                <form onSubmit={this.props.addNewNote}>
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
                        cols="70" 
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
        );
    }
}

export default CreateNewView;
