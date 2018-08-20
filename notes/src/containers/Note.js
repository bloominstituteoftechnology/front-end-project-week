import React from 'react';
import DeleteModal from '../components/DeleteModal';
import { Link, Route } from 'react-router-dom'; 
import EditNote from '../components/EditNote';


const Note = (props)=> {
    return(
        <div className="Note">
            <div className="edit-delete">
                <Link to="/edit">edit</Link>
                <Link to="/delete">delete</Link>
            </div>
            <h2>{props.title}</h2>
            <p>{props.textBody}</p>
            <Route path='/edit' render={(props)=> <EditNote {...props} /> }/>
            <Route path='/delete' render={(props)=> <DeleteModal {...props} />} />
        </div>
    )
}

export default Note;