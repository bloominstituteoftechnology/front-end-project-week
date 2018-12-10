import React from 'react';

const DeletePage = props => {
  
    return (
        <div className="delete-page">
            <div className = 'delete-block'>
                <p>Are you sure you want to delete this?</p>
                <div>
                    <button className='delete' onClick={props.deleteConfirm}>Delete</button>
                    <button onClick={()=> props.history.goBack()}>No</button>
                </div>
            </div>
        </div>
    )
}

export default DeletePage;