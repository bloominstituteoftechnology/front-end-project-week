import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

class ModalExample extends React.Component {
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
        return (
            <div>
                <span style={{ color: "black" }} onClick={this.toggle}>delete</span>
                <Modal centered={true} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader>Are you sure you want to delete this?</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col> <Button color="danger" size="lg" block onClick={this.toggle}>Delete</Button></Col> {' '}
                            <Col>  <Button color="info" size="lg" block onClick={this.toggle}>Cancel</Button> </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;