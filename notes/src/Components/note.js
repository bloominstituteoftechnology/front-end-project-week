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
        this.toggle = this.toggle.bind(this);
    }

    delete = () => {
      let newdeletenote = this.props.location.state.note.id
      this.props.location.deletenote(newdeletenote)
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
        
    }
render() {
    return(
    <div>
        <Card className="text-left">
          <CardBody>
              <div class="text-right">
              <Nav>
              <Link to= {
                                 {
                                   pathname: `/notes/edit`,
                                   state: this.props.location.state.note,
                                   editnote: this.props.location.editnote
                                 }
                               }>    
               <NavLink>edit</NavLink>
               </Link>
                
                <NavLink color="danger" onClick={this.toggle} href="#">delete</NavLink>
              </Nav>
              </div>
              <div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                <ModalFooter>
                <Link to= {
                           {
                             pathname: '/',
                             
                           }
                         }>
                  <Button color="primary" onClick={this.delete}>Delete</Button>
                  </Link>
                  <Button color="secondary" onClick={this.toggle}>No</Button>
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