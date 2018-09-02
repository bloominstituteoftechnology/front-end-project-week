import React from 'react';

const EditView = (props) => {

    const note = props.notes.find(note =>
        note._id == props.match.params._id)

    return(
        <div className='create-edit-view'>
            <header className='header-container'>
                <h3 className='create-edit-header'>Edit Note:</h3>
            </header>
            <div className='form-container'>
                <form 
                    className='create-edit-form'
                    onSubmit={(event) => this.props.editNote(event, note._id)}>
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
                        cols="70" 
                        rows="20"
                        value={props.textBody}
                        name='textBody'
                    ></textarea>
                    <button 
                        className='button-style'
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
       );
}

export default EditView;