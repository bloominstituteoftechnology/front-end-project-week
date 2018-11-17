import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Example extends React.Component {

    render() {  
      return (
        <div>
          <p>Click to get the full Modal experience!</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Launch demo modal
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <h4>Popover in a modal</h4>
        
  
              <h4>Tooltips in a modal</h4>

  
              <hr />
  
              <h4>Overflowing text to show scroll behavior</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  

export default Example;