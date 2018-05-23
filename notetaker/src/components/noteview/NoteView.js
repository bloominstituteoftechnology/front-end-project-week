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
                                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
