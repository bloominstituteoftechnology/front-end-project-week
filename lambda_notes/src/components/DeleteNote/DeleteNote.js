import React, { Component } from 'react';
import { deleteNote } from '../../actions';
import { connect } from 'react-redux';
import './index.css';

class DeleteNote extends Component {

    handleDelete = () => {
        this.props.deleteNote(this.props.toDelete);
        this.props.history.push('/');
    }
    
    render() {
        console.log('Delete Note Props:', this.props)
        let toggle = this.props.toggle;
        return (
            <div className={toggle ? 'delete_wrapper' : 'hidden'}>
                <div>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div className='delete_buttons_wrapper'>
                    <div
                        className='button button--danger'
                        onClick={this.handleDelete}
                    >
                        DELETE
                    </div>
                    <div
                        className='button'
                        onClick={this.props.showModal}
                    >
                        NO
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {deleteNote})(DeleteNote);