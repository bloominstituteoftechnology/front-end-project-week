import React, { Component } from 'react';

const DeleteModal = (props) => {
        return 
            <div className="section__delete">
                <p>Are you sure you want to delete this?</p>
                <div className="button__main">Delete</div>
                <div className="button__main">Save</div>
            </div>
}


export default DeleteModal;