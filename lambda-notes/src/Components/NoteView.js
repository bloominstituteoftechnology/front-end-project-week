import React, { Component } from 'react';
import { Button, Modal, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import "./NoteView.css";
import { Link } from 'react-router-dom';


class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            id: parseInt(this.props.match.params.id, 10),
            title: "",
            content: "",
            delete: false
        };
    }
    componentDidMount = () => {
        this.displayNote();
    }
    displayNote = () => {
        const displayedNote = this.props.notes.filter(
            (note, index) => this.state.id === note.id
        );
        if (displayedNote[0]) {
            this.setState({
                note: displayedNote[0],
                title: displayedNote[0].title,
                content: displayedNote[0].content
            });
        }
    };

    deleteToggle = () => {
        this.setState({
            delete: !this.state.delete
        });
    };

    handleDelete = () => {
        this.props.deleteNote(this.state.id);
        this.setState({
            note: null
        });
    };

render() {
    return (
        <div className="note-view">
            <div>
                <Button><div onClick={this.deleteToggle}>Delete</div></Button>
            </div>
            <Modal isOpen={this.state.delete} toggle={this.deleteToggle}>
                <ModalBody>
                    Do you want to delete this note?
                    <Link to="/"><Button onClick={this.handleDelete}>Delete</Button></Link>
                    <Link to="note/:id"><Button onClick={this.deleteToggle}>No</Button></Link>
                </ModalBody>
            </Modal>
            <h3 className="note-title">{this.state.title}</h3>
            <div className="note-content">{this.state.content}</div>
        </div>
    )
}
};

export default NoteView;