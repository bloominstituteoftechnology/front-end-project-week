import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NoteDeleteModal extends Component {
   state = {

   };

    componentDidMount() {
        console.log(this.props.match.params);
        axios
      .put(`https://killer-notes.herokuapp.com/note/delete/${this.props.match.params.id}`, newNote)
        .then(res => {
        
          this.setState({
            title: res.data.title,
            textBody: res.data.textBody
          });
        })
        .catch(err => {
          console.error(`Error: ${err}`)
        })

    this.setState({
      title: '',
      textBody: ''
    });
    }

    render() { 
        return (  
        <h1>Delete</h1>
        );
    }
}
 
export default NoteDeleteModal;