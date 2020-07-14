import React from 'react';
import './index.css';



class EditNote extends React.Component {
        render() {
            return (
             <div className='editNote-Container'>
               <div className='editNote-topContent'>
                 <h3 className='content-header'>
                 Edit Note:
                 </h3>
               </div>
            <div className='editNote-form'>
              <input type='text' className='editNote-title' placeholder='Note Title'/>
              <textarea className='editNote-body' placeholder='Note Content' rows='20'/>
              <a href='#' className='button-link'>
              <div className='editNote-btn' ><button>Update</button></div>
              </a>
            </div>
             </div>
            );
        }
    }


export default EditNote;