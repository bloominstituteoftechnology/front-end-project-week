import React, { Component } from 'react';

class Delete extends Component {
    render() {
        let toggle = this.props.toggle;
        return (
            <div className={toggle ? 'delete-container' : 'hidden'}>
                <div>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div className='delete-buttons'>
                    <div className='delete-button1'>Delete</div>
                    <div className='delete-button2'>No</div>
                </div>
            </div>
        );
    }
}

export default Delete;

