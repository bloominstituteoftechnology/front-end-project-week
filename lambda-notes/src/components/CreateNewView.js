import React, { Component } from 'react';

class CreateNewView extends Component {
    render() {
        return(
            <div className='create-new-view'>
                <h3>Create New Note</h3>
                <form onSubmit={this.props.addNewNote}>
                    <input 
                        onChange={this.props.handleInputChange}
                        type="text"
                        placeholder='Note Title'
                        value={this.props.title}
                        name='title'
                    />
                    <textarea 
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