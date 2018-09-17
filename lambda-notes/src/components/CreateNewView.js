import React from 'react';

const CreateNewView = (props) => {
    return(
        <div className='create-edit-view'>
            <header className='header-container'>
                <h3 className='create-edit-header'>Create New Note:</h3>
            </header>
            <div className='form-container'>
                <form
                    className='create-edit-form'
                    onSubmit={props.addNewNote}>
                    <input
                        className='title-input' 
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder='Note Title'
                        value={props.title}
                        name='title'
                    />
                    <textarea 
                        className='content-input'
                        onChange={props.handleInputChange}
                        placeholder='Note Content' 
                        cols="90" 
                        rows="20"
                        value={props.textBody}
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

export default CreateNewView;
