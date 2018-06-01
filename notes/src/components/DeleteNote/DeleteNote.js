import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class DeleteNote extends Component {
    render() {
        let toggle = this.props.toggle;
        // console.log(this.props);
        return (
            <div className={ toggle ? 'modal-wrapper': 'hidden' }>
                <div className='modal-header'>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div>
                    <Link to='/'>
                    <button 
                        className='btn modal-btn delete-btn'
                        onClick={this.props.showModal}
                        >
                        Delete
                    </button>
                    </Link>
                    <button 
                        className='btn modal-btn'
                        onClick={this.props.showModal}
                        >No
                        </button>
                </div>
            </div>
        );
    }
}

export default DeleteNote;