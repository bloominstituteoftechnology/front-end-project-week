import React, { Component } from 'react';
import './index.css';
// import { deleteNote } from '../../actions';
// import { connect } from 'react-redux';



class DeleteNote extends Component {
    

    handleDelete = () => {
        this.props.deleteNote(this.props.toDelete);
        this.props.history.push('/');
    }   


    render() {
        console.log('delete props', this.props)

        let toggle = this.props.toggle;

        return (
            <div className ={toggle ? "show_modal" : "hidden"}>
                <div className="modal">
                    <div className="question">Are you sure you want to delete this?</div>
                    <div>
                        <button 
                        className="red"
                        onClick={this.handleDelete}
                        // onClick={this.props.showModal}
                        >
                            Delete
                        </button>
                        <button 
                        onClick={this.props.showModal}
                        >
                            No
                        </button>
                    </div>
                </div>
                <div className="gray_background"></div>
            </div>
        )
    }
}

// export default connect(null, {deleteNote})(DeleteNote);
export default DeleteNote;