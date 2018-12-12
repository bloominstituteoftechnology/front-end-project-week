import React from 'react';

//styling
import './Delete.css';

const Delete = props => {
    console.log(props)
    return (
        // {props.deleteModal}
        <div className='deleteWrap'>
            <div className='deleteBox'>
                <p>Are you sure you want to delete this?</p>
                <div className='deleteConfirm'>
                    <button onClick={() => props.deleter(props.note.id, props)}className='deleteButton'>Delete</button>
                    <button className='noDelete'>No</button>
                </div>
            </div>
        </div>
    );
}
 
export default Delete;