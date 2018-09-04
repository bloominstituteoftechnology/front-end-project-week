import React, { Component } from 'react';
import './index.css';
import {deleteNote} from '../../actions';
import { connect } from 'react-redux';



class DeleteNote extends Component {

    handleDelete = () => {
        this.props.deleteNote(this.props.toDelete)
        
    }   

    render() {
        console.log('delete', this.props)
        let toggle = this.props.toggle;


        return (
            <div className ={ toggle ? "" : "hidden"}>
                Are you sure..
                <button 
                onClick={this.handleDelete}>
                    Delete
                </button>
                <button onClick={this.props.showModal}>
                    No
                </button>
            </div>
        )
    }
}

export default connect(null,{deleteNote})(DeleteNote);