import React from 'react';

//styling
import './Delete.css';

const Delete = () => {
    return (
        <div className='delete'>
            <div className='deleteBox'>
                <p>Are you sure you want to delete this?</p>
                <div className='deleteConfirm'>
                    <button className='deleteButton'>Delete</button>
                    <button className='noDelete'>No</button>
                </div>
            </div>
        </div>
    );
}
 
export default Delete;