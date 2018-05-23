import React, { Component } from 'react'; 
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Row, Col, Button, Modal, ModalBody } from 'reactstrap';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    
    handleDelete = () => {
        this.toggleModal();
        this.props.deleteNote(this.props.selectedNote.title);
        this.props.history.push('/');
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className='col-3 ml-auto'>
                        Edit Delete
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <h3>{this.props.selectedNote.title}</h3>
<br />
                        <p>{this.props.selectedNote.content}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(ViewNote);
