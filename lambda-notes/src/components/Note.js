import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            id: '',
            edit: false,
            modal: false,
            list: true
        }
    }

    componentDidMount() {
        if (this.props.note) {
            const note = this.props.note;
            this.setState({
                title: note.title,
                body: note.body,
                id: note.id
             });
        } else {
            const id = this.props.match.params.id;
            this.fetchNote(id);
            this.setState({ list: false })
        }
    }

    fetchNote = (id) => {
        id = parseInt(id, 10);
        const note = this.props.notes.filter(note => note.id === id)[0];
        this.setState({
            title: note.title,
            body: note.body,
            id: note.id
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleUpdate = (e, note) => {
        e.preventDefault();
        this.props.updateNote(note);
        this.setState({edit: false})
    }

    handleDelete = (id) => {
        this.toggleModal();
        this.props.deleteNote(id);
    }

    toggleModal() {
        this.setState({modal: !this.state.modal});
    }

    render() {
        const { title, body, id, edit, modal, list } = this.state;
        return (
            <div>
                {list ? (
                    <div className="note-card">
                        <h3>{title}</h3>
                        <div className="note-card-text-wrapper"><p className="note-card-text">{body}</p></div>
                    </div>
                ) : (<div>
                    {edit ? (
                        <div>
                            <h3>Edit Note:</h3>
                            <form>
                                <input name="title" value={title} placeholder="Note Title" onChange={(e) => this.handleChange(e)}/>
                                <input name="body" value={body} placeholder="Note Content" onChange={(e) => this.handleChange(e)}/>
                                <button className="button" onClick={() => this.handleUpdate({title, body, id})}>Save</button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <button onClick={() => this.setState({edit: true})}>Edit</button>
                                <button onClick={() => this.toggleModal()}>Delete</button>
                            </div>
                            <h3>{title}</h3>
                            <div>{body}</div>
                        </div>
                    )}
                    {modal ? (
                        <Modal isOpen={modal} className={this.props.className}>
                          <ModalHeader>Modal title</ModalHeader>
                          <ModalBody>
                            Are you sure you want to delete this?
                          </ModalBody>
                          <ModalFooter>
                            <Link to="/" onClick={() => this.handleDelete(id)}>Delete</Link>
                            <button onClick={() => this.toggleModal()}>Cancel</button>
                          </ModalFooter>
                        </Modal>
                    ) : (null)}
                    </div>
                )}
            </div>
        );
    }
}

export default Note;
