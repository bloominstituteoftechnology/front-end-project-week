import React from 'react';
import { Link } from 'react-router-dom'


const DeleteConfirm = props => {
    
    return (
        <div className={props.deleteConfirm ? 'showDelete' : 'hide-delete'}>
            <div>
                <h2>DELETE?</h2>
            </div>
            <div className="delete-buttons">
                <Link to="/"><button className="delete" onClick={props.toggleDelete}>DELETE</button></Link>
                <Link to="/"><button className="cancelDelete" onClick={props.toggleDelete}>NO</button></Link>
            </div>
        </div>
    );
}

export default DeleteConfirm;