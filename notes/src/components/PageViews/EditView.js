import React from 'react';
import './EditView.css'

const EditView = () => {
    return (
        <div className='edit'>
            <h3>Edit Note:</h3>
            <form>
                    <input
                        type='text'
                        placeholder='Note Title'
                    />
                    <textarea
                        name='content'
                        placeholder='Note Content'
                    />
                <button>Update</button>
            </form>
        </div>
    );
}
 
export default EditView;