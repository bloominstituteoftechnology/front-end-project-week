import React from 'react';
import './CreateNewView.css'

const CreateNewView = () => {
    return (
        <div className='new'>
            <h3>Create New Note:</h3>
            <form>
                    <input
                        type='text'
                        placeholder='Note Title'
                    />
                    <textarea
                        name='content'
                        placeholder='Note Content'
                    />
                <button>Save</button>
            </form>
        </div>
    );
}
 
export default CreateNewView;