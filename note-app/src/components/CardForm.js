import React from 'react';
import { Link } from 'react-router-dom';
import './cardForm.css';


const cardForm = () => {
    return (
    <div className='createContainer'>
        <div>
            <h2 className='createHeader'>Create New Note:</h2>
        </div>
            <form className='form'>
                <input type='text' className ='insertTitle' placeholder='Note Title' />
                <textarea type='text' className='insertContent' name='content' placeholder='Note Content'></textarea>
                    <Link to ='/card'>
                        <input className='saveButton' type='button' value='Save' />
                        </Link>
            </form>
    </div>
    )
}

export default cardForm;