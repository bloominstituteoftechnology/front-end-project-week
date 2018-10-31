import React, { Component } from 'react';
import axios from 'axios';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}, 
            title: '',
            textBody: '',
            showModal: ''
        }
        //this.handleclick = this.handleclick.bind(this);
    }

    // componentDidMount() {
    //     document.addEventListener('click', this.handleclick, false);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleclick, false);
    // }

    deleteNote = (id) => {  //where is id coming from????
        //const deleted =  this.props.match.params.id;
        axios 
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => this.setState({ note: response.data }))  //list? 
            .catch(error => console.log(error))
    }; 

    closeModal() {
        this.setState({ showModal: false })
    }

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