import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Modal } from '../Modal';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    
    render() {
        return (
            <div>
                <button type='button' onClick={this.showModal}>
                    Are You Sure You Want To Delete This?
                </button>
            </div>
        )
    }
}

export default Delete;