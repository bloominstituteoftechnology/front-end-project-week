import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import {notesdata} from './App';

// this holds the edit and delete buttons 
export default class Note extends Component {
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
    
    render(){
    return <div>
        {console.log(this.props.note)}
                
        
            <Card body>
                        {/* <Link to='/EditNote' className ='editnote' type= 'text' placeholder='edit' name='editNote'/> */}
                        <CardLink><Link to='/EditNote'>edit</Link></CardLink>
                        <CardLink><Link to='' onClick={this.toggle}>delete</Link></CardLink>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalBody>
                            Are you sure you want to delete this?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
                            <Button color="primary" onClick={this.toggle}>No</Button>
                        </ModalFooter>
                        </Modal>
                        {/* <Link to='/CreateNote' className ='deletenote' type= 'text' placeholder='delete' name='deleteNote'/> */}
                        {console.log("I have been pushed")}
                        {console.log(this.props)}
                        <CardTitle> Title: I should be a title {this.props.title}</CardTitle>
                        <CardText>Body: {this.props.body}</CardText>   
            </Card>
        
    </div>
    }
}
