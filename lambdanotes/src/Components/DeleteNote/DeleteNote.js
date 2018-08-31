import React from 'react';
import './index.css';


class DeleteNote extends React.Component {
    render() {
        return (
         <div className='delete-note-container hidden'>
             <div>
                 <h4>Are you sure you want to delete?</h4>
             </div>
             <div className='delete-buttons'>
             <a href='#' className='button-link'>
              <div className='deleteNote-btn' ><button className='red'>DELETE</button></div>
              </a>
              <a href='#' className='button-link'>
              <div className='deleteNote-btn' ><button>NO</button></div>
              </a>
             </div>
         </div>
        );
    }
}

export default DeleteNote;