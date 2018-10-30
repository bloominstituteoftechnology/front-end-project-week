import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {
    constructor(props) {
        super(props);
        //this.handleclick = this.handleclick.bind(this);
    }

    // componentDidMount() {
    //     document.addEventListener('click', this.handleclick, false);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleclick, false);
    // }

    deleteNote = (id) => {
        axios 
            .delete(`https://fe-notes.herokuapp.com/note/${id}`)
            .then(response => this.setState({ list: response.data }))
            .catch(error => console.log(error))
    }; 

    // closeModal() {

    // }

    render() {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h4>Are you sure you want to delete this?</h4>
                        <button onClick={this.deleteNote} className="delete">Delete</button>
                        <button onClick={this.closeModal} className="No">No</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;