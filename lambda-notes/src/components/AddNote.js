import React from 'react';
import { Link } from 'react-router-dom';

const AddNote = props => {
  return (
    <div className='form'>
    <h2>Create New Note:</h2>
    <form>
      <input name='newTitle' type='text' value={props.title} onChange={props.handleInputChange} placeholder='Note Title'/>
      <textarea name='newTextBody' type='text' value={props.body} onChange={props.handleInputChange} placeholder='Note Content'/>
      <Link style={{ textDecoration: 'none' }} to={'/'}><button type='button' className='save' onClick={props.handleAddNote}>Save</button></Link>
      </form>
    </div>
  )
}

export default AddNote;
