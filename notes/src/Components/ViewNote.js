import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, /* NavLink */ } from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
        <div>
            <Nav className="Nav justify-content-end pr-5 pt-4 ">
                <NavItem className="Update_Delete">
                    <Link to="/EditNote" className="text-dark font-weight-bold"> edit </Link>
                    <span className="DeleteNote text-dark font-weight-bold" onClick={this.toggle}>delete</span>
                </NavItem>
            </Nav>
    

         <div>

            <div>
                 <h4 className='text-left pl-4 pt-3 '> Note Name: </h4>
                <div className="ViewNote p-4 h4 font-weight-normal">
                    <p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius libero eget libero gravida pretium sed at erat. Curabitur suscipit metus tortor, sit amet bibendum nulla molestie sit amet. In scelerisque libero risus, auctor porttitor nulla fermentum et. Mauris varius ullamcorper augue non laoreet. Duis in velit ut mi viverra pharetra sed tempus enim. Integer sed dolor ante. Vestibulum ut ultricies enim, sit amet placerat eros. In interdum sollicitudin neque, sit amet sagittis elit consequat a. Praesent eu eros et ante efficitur dapibus. Sed sit amet pulvinar elit. Nulla quis sapien ac enim suscipit sagittis a ut leo. Phasellus eget sem efficitur, semper dui eu, placerat nibh.</p>
                    <p className="m-2 mt-4">Suspendisse potenti. Morbi at justo a risus interdum aliquam. Donec ultricies felis id condimentum consectetur. Proin sit amet malesuada dui, quis tristique ipsum. Mauris in est dignissim, ullamcorper nunc ut, luctus ipsum. Vestibulum a massa luctus, lobortis diam vel, venenatis orci. Fusce sit amet nibh eget elit faucibus imperdiet sed in nunc. Fusce tortor est, varius non sem eget, mattis rutrum risus.</p>
                </div> 
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody className="text-center p-4 mt-4">
                    Are you sure you want to delete this?
                </ModalBody>
                <div className="d-flex justify-content-center mb-4">
                    <Button className="Button_Modal m-3" color="danger" onClick={this.toggle}>Delete</Button>{' '}
                    <Button className="Button_Modal m-3" color="lightseagreen" onClick={this.toggle}>No</Button>
                </div>
            </Modal>
               
       </div> 
       </div> 
       
    );
}; 

}


   

export default ViewNote;