
import React, { Component } from 'react';
import './index.css'
import Axios from 'axios';

class DeleteNote extends Component {

    deleteNote = () => {
       Axios.delete(`http://localhost:8000/api/notes/${this.props.id}`)
            .then( response => {
                if(response){
                    this.props.history.push('/')
                }
            })
            .catch( error => {
                
            })
    }
    
    render() {
        let toggle = this.props.toggle
        return (
            <div className ={ toggle ? "none" : 'hidden'}>
                <div>
                    <h4>Are you sure you want to delete this?</h4>
                </div>
                <div className='button'>
                    <div className='delete-button' onClick ={ this.deleteNote} >DELETE</div>
                    <div className='cancel-button' onClick ={this.props.showModal} >No</div>
                </div>
            </div>
        );
    }
}

export default DeleteNote;