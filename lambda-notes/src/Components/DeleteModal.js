import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteNote } from '../Actions';

class DeleteModal extends Component {
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
        console.log('PROPS', this.props)
        return (
            <div>
                <a onClick={ this.toggle }>Delete</a>
                <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>

                    <ModalBody>
                        <p>Are you sure you want to delete this?</p>

                   
                            <Button onClick={ () => this.props.deleteNote(this.props.id) }>
                                Delete
                            </Button>
                      

                        <Button>No</Button>

                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state,
    }
}
export default connect(mapStateToProps, { deleteNote })(DeleteModal);
