import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import ListItems from './listitems';
import MyFilteredNote from './individualnotes';


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal 
        });
    }
  

  render() {

        let MyNote = this.props.todos.filter((todo) => this.props.match.params.id == todo._id);
        MyNote = MyNote[0];

        return (
            <div className="container2">
        
                <MyFilteredNote todos={MyNote} />


                {/* edit and delete buttons */}
                <Link to={`/EditNote/${MyNote._id}`}>
                    <button className="button4">edit</button>
                </Link>

                <div>

                    <Button className="button5" color="Link" onClick={this.toggle}>delete</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="my-modal">
                        <ModalHeader className="modalheader" toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                        <ModalFooter className="modalfooter">
                        <Link to="/">
                            <Button className="button6" color="danger" onClick={ () => this.props.handleDeleteSubmit(this.props.match.params.id)}>Delete</Button>{' '}
                            </Link>
                            <Button className="button7" color="Link" onClick={this.toggle}>No</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        )
    }
};

export default ViewNote; //exports