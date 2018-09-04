import  React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, NavLink, Nav, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import './note.css';

//import axios from 'axios';

export default class Note extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            modal: false
          };
        console.log("This is note" + props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }
render() {
    console.log('the state is ' + this.props.location.state.note.title)
    return(
    <div>
        <Card className="text-left">
          <CardBody>
              <div className="text-right">
              this proves it
              <Nav className="text-right">
              <Link to= {
                                 {
                                   pathname: '/notes/edit',
                                 }
                               }>    
               <NavLink href="#">edit</NavLink>
               </Link>
                
                <NavLink color="danger" onClick={this.toggle} href="#">delete</NavLink>
              </Nav>
              </div>
              <div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
            <CardTitle>{this.props.location.state.note.title}</CardTitle>
            <CardText>{this.props.location.state.note.content}</CardText>
          </CardBody>
        </Card>
    </div>

    )
}
}