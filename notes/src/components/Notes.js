import React from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
    if(props.notes){
        return(
            <div className='notes-container'>
                <h1>Notes Component</h1>
    
                {props.notes.map((n, i) => {
                    return(
                        <div key={i}>
                            <Link to={`/note/${n._id}`}>{n.title}</Link>
                        </div>
                    )
                })}
            </div>
        )
    } else if (props.error){
        return <h1>No notes found...</h1>
    } else {
        return <h1>Loading notes...</h1>
    }
}

export default Notes;