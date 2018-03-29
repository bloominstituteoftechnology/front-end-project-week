import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modal: false,
        }
        this.toggle = this.toggleDelete.bind(this);
    }

    toggleDelete() {
        this.setState({
            Modal: !this.state.Modal
        })
    }
}