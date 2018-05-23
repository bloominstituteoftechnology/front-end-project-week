import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button, Input, InputGroup,
    Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import { Link } from 'react-router-dom';
import './noteview.css'

export default class NoteView extends Component {
  constructor(props) {
      super(props);
      this.state ={
          modal:false,
      };
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  /*deleteHandler = e => {
    e.preventDefault();
    let id = this.props.location.state.id;
    this.props.location.state.handleDelete(id);
  }*/

  render() {
    const { title } = this.props.location.state;
    const { body } = this.props.location.state;
    const { id } = this.props.location.state;
    return (
      <div>
        <Container>
            <Row className="border">
                <Col xs="3" className="sidebar">
                    <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                    <Link to="/">
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                    </Link>
                    <Link to="/create">
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                    </Link>
                </Col>
                <Col xs="9" className="pr-5">
                    <Row className="justify-content-end mt-3">
                        <Col xs="1">
                            <Link to={{
                                    pathname:`/edit/${id}`,
                                    state: {
                                        id: {id},
                                        title: {title},
                                        body: {body}
                                    }
                                }} style={{ textDecoration: 'underline', color: 'black' }}>
                                edit
                            </Link>
                        </Col>
                        <Col xs="1">
                            <p className="delete-button" onClick={this.toggle} style={{ textDecoration: 'underline' }}>delete</p>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalBody toggle={this.toggle}>Are you sure you want to delete this?</ModalBody>
                                <ModalFooter>
                                    <Link to={{
                                        pathname:`/`,
                                        state: {
                                            deleteID: {id},
                                            title: {title},
                                            body: {body}
                                        }
                                    }} >
                                    <Button color="danger"> 
                                        Delete
                                    </Button>{' '}
                                    </Link>
                                    <Button color="info" onClick={this.toggle}>No</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                    <Row className="ml-3 mt-2 pt-4 mb-3">
                        <h3 className="text-left heading">{title}</h3>
                    </Row>
                    <Row className="ml-3 mb-4 pr-4 text-left">
                        <p>{body}</p>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
