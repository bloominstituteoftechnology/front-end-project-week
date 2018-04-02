import React from 'react';

const Delete = (props) => {
        return (
<div className="section__delete">
                <p className="delete__p">Are you sure you want to delete this?</p>
                <br />
                <div className="button__delete">Delete</div>
                <div className="button__save">Save</div>
      
            </div>
        )
}
export default Delete;