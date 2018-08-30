import React from 'react';
import './index.css';


class CreateNote extends React.Component {
    render() {
        return (
         <div className='noteView-Container'>
           <div className='noteView-topContent'>
             <h3 className='content-header'>
                Create New Note:
             </h3>
           </div>
        <div className='createNote-form'>
          <input type='text' className='createNote-title' placeholder='Note Title'/>
          <textarea className='createNote-body' placeholder='Note Content' rows='20'/>
          <a href='#' className='button-link'>
          <div className='createNote-btn' ><button>Save</button></div>
          </a>
        </div>
         </div>
        );
    }
}

export default CreateNote;