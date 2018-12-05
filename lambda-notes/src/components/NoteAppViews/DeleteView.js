import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class DeleteView extends React.Component {
 constructor(props) {
   super(props)
 
   this.state = {
      toggle: false
   };
 };
 
 toggle = () => {
  this.setState({
   toggle: !this.state.toggle
  })
 }
  render() {
    return (
      <div>
        <Modal color="info" onClick={this.toggle}>
         <ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
           <Button>Do Something</Button>
          </ModalFooter>
         </ModalHeader>
        </Modal>
      </div>
    )
  }
}
