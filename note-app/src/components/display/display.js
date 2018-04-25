import React from 'react';
import './display.css';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Display extends React.Component {
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

            <div className='Display'>
                <div className='Display__buttons'>
                    <Link to='/' className='edit'> edit</Link>
                    {/* button to open modal */}
                    <Button color='danger' onClick={this.toggle} className='delete' > delete</Button>
                </div>
                {/* modal that is opened */}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} className='close'>Close</ModalHeader>
                    <ModalBody> Sample Text </ModalBody>
                    <ModalFooter className='buttonDiv'>
                        <Button onClick={this.toggle} className='modalButton'> Delete </Button>{' '}
                        <Button onClick={this.toggle} className='modalButton'> Do not delete</Button>
                    </ModalFooter>
                </Modal>
                <div className='Display__content header'> props.header</div>
                <div className='Display__content'>props.title</div>
                <div className='Display__content'>props.body</div>


            </div>
        )
    }
}
export default Display;