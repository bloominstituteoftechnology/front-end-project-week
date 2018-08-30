import React, { Component } from 'react';

class EditView extends Component {
    render() {
        return(
            <div className='create-new-view'>
                <h3>Edit Note</h3>
                <form onSubmit={this.props.editNote}>
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
                        Update
                    </button>
                </form>
            </div>
        );
    }
}

export default EditView;