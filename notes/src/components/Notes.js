import React from 'react';

import {
    Link
} from 'react-router-dom';

const Notes = props => {
    return (
        <div className='notes-container' >
            <h1> Notes </h1>

            {props.notes.map((n, i) => {
                return (
                    <div key = {i}>
                        <Link to={`/note/${n._id}`} >
                            {n.title} 
                        </Link> 
                    </div>
                )
            })} 
            
        </div>
    )
}

export default Notes;