import React from 'react';
import { Link } from 'react-router-dom';


const editCard = () => {
    return (
        <div className='editContainer'>
            <div> 
                <h4>Edit Note</h4>
                </div>
                <form>
                    <input type='text' className='editInput' name='title' placeholder='Note Title' />
                    <textarea type = 'text' className='editContent' name='content' placeholder='Note Content'></textarea>
                    <div>
                        <Link to='/card'>
                          <input classname='editSave' type='button' value='Update' />
                          </Link>
                          </div>
                          </form>
                          </div>

    )
}

export default editCard;