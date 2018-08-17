import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col, Button, Modal ModalBody } from 'reactstrap';

class NoteView extends Component {
    state = {
        modal: false
    };

    handleDelete = () => {
        this.toggleModal();

    }
    return (
        <div className='Full-Note'>
            <header>Note Title</header>
            <div>{this.props.state.content}</div>
        </div>
    );
}

export default NoteView;