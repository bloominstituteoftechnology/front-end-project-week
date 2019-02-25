import React from 'react';
import './EditView.css'

const EditView = props => {
    console.log(props)
    return (
        <div className='edit'>
            <h3>Edit Note:</h3>
            <form>
                    <input
                        type='text'
                        placeholder='Note Title'
                        value={props.location.state.title}
                        onChange={props.changeTitle}
                    />
                    <textarea
                        name='content'
                        placeholder='Note Content'
                        value={props.location.state.textBody}
                        onChange={props.changeTextBody}
                    />
                <button onClick={props.handleEdit}>Update</button>
            </form>
        </div>
    );
}
 
export default EditView;