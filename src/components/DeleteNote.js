import { Modal, Button } from 'reactstrap';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';








class DeleteNote extends Component  {
    render(){
    return (
        <div className='container0'>

<div className="static-modal">
  <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>One fine body...</Modal.Body>

    <Modal.Footer>
      <Button>Close</Button>
      <Button bsStyle="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
</div>
</div>
    )
}
}


export default DeleteNote;
