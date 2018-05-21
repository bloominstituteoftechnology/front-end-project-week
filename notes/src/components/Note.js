import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from './Button'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(event) {
        event.preventDefault();
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        // console.log("note", this.props)
        return (
            <div className="note-view">
                <div className="navL"><Link to={`/edit/${this.props.note.id}`} className="nview">edit</Link>
                    <Link to="/" onClick={this.toggle} className="nview">delete</Link>
                </div>
                <h3>{this.props.note.title}</h3>
                <p className="note-body">{this.props.note.text}</p>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <h6>Are you sure you want to delete this?</h6>
                    </ModalBody>
                    <ModalFooter>
                        <Link to="/"><Button text="Delete" class="delete" function={() => this.props.delete(this.props.note.id)} /></Link>
                        <Button text="No" class="no" function={this.toggle} />
                    </ModalFooter>
                </Modal>

            </div >
        );
    }
}

export default Note;