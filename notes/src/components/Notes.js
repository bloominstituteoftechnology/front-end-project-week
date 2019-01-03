// *** === Imports === *** //
// React
import React from 'react';

// React Router
import {
    Link
} from 'react-router-dom';


// *** === Functional Component === ***
const Notes = props => {
    return (
        <div className='notes-container'>
            <h1>Notes</h1>

            {props.notes.map((n, i) => {
                return (
                    <div key={i}>
                        <Link to={`/note/${n._id}`} >
                            {n.title} 
                        </Link> 
                    </div>
                )
            })} 
            
        </div>
    )
}

// *** === Default Export === *** //
export default Notes;