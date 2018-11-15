import React from 'react'
import Link from 'react-router-dom';

const ExpandedNote = () =>{
    return(
        <div className = 'expanded-note-container'>
            <div classname = 'edit-container'>
                <Link to = '/edit'>
                    <p>edit</p>
                </Link>
                  
                    <p>delete</p>
              
            </div>
        </div>
    )
}
export default ExpandedNote;