import React, { Component } from 'react';
import { deleteNote } from '../../actions';
import { connect } from 'react-redux';
import './index.css';

class DeleteNote extends Component {

    handleDelete = () => {
        this.props.deleteNote(this.props.toDelete)
        this.props.history.push('/');
    }
    render() {
        console.log('delete-props', this.props)
        let toggle = this.props.toggle;
        // console.log(this.props);
        return (
            <div className={ toggle ? 'modal-wrapper': 'hidden' }>
                <div className='modal-header'>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div>                    
                    <button 
                        className='btn modal-btn delete-btn'
                        onClick={this.handleDelete}
                        >
                        Delete
                    </button>                    
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

export default connect(null, {deleteNote})(DeleteNote);