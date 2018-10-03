import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NoteDeleteModal extends Component {
   state = {

   };

    componentDidMount() {
        console.log(this.props.match.params);
    }
    render() { 
        return (  
        <h1>Delete</h1>
        );
    }
}
 
export default NoteDeleteModal;