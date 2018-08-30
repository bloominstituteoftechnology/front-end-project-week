import React, { Component } from 'react';
import './index.css';

export default class DeleteNote extends Component {
    render() {
        let toggle = this.props.toggle;
        return (
            <div className={toggle ? 'deleteContainer' : 'hidden'}>
                <div>
                    <span>Are you sure you want to delete this?</span>
                </div>
                <div className='deleteButtons'>
                    <button onClick={this.props.updateStatus}><strong>Delete</strong></button>
                    <button><strong>No</strong></button>
                </div>
            </div>
        )
    }
}