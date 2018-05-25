import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import Button from './Button'
import Markdown from 'markdown-to-jsx';
import { fetchNotes } from './Actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

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
        console.log("note", this.props)
        return (
            <div className="note-view">
                <div className="navL">
                    <Link to={`/edit/${this.props.note.id}`}><Button class="edit-button" text="edit" function={() => this.props.edit(this.props.note.id)} className="nview" /></Link>
                    <Link to="/" onClick={this.toggle} className="nview">delete</Link>
                </div>
                <h3>{this.props.note.title}</h3>
                <div className="note-body"><Markdown>{this.props.note.text}</Markdown></div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <h6>Are you sure you want to delete this?</h6>
                    </ModalBody>
                    <ModalFooter>
                        <Link to="/notes"><Button text="Delete" class="delete" function={() => {
                            this.props.delete(this.props.note.id)
                            this.props.fetchNotes(this.props.auth.uid)
                        }
                        } /></Link>
                        <Button text="No" class="no" function={this.toggle} />
                    </ModalFooter>
                </Modal>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth.user }
}

export default withRouter(connect(mapStateToProps, { fetchNotes })(Note));