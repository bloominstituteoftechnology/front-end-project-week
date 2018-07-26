import React from 'react';
import './EditView.css'

const EditView = props => {
    console.log(props.location.state)
    return (
        <div className='edit'>
            <h3>Edit Note:</h3>
            <form>
                    <input
                        type='text'
                        placeholder='Note Title'
                        value={props.location.state.title}
                    />
                    <textarea
                        name='content'
                        placeholder='Note Content'
                        value={props.location.state.textBody}
                    />
                <button>Update</button>
            </form>
        </div>
    );
}
 
export default EditView;