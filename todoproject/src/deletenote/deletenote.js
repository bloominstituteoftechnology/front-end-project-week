import React, { Component } from 'react';
import './index.css';
import { Alert } from 'reactstrap';

class DeleteNote extends Component {
    render() {
        return (
          
            <div>    
                <Alert color="success" className="alert">
                <h4 className="alert-heading">Are you sure you want to delete this?</h4>
                <hr />
                <button>Delete</button>
                <button>No</button>
                </Alert>
            </div>
        )
    }
};

export default DeleteNote;