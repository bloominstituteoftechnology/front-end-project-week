import React from 'react';
import './CreateNewView.css'
import { Link } from 'react-router-dom';

const CreateNewView = (props) => {
    return (
        <div className='new'>
            <h3>Create New Note:</h3>
            <form>
                    <input
                        type='text'
                        name='title'
                        placeholder='Note Title'
                        value={props.title}
                        onChange={props.changeTitle}
                    />
                    <textarea
                        name='content'
                        placeholder='Note Content'
                        value={props.textBody}
                        onChange={props.changeTextBody}
                    />
                <Link to='/'>
                    <button onClick={props.addNewNote}>Save</button>
                </Link>
            </form>
        </div>
    );
}
 
export default CreateNewView;