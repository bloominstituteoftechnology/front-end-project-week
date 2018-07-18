import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
                title: '',
                body: ''
            },
            id: '',
            edit: false,
            modal: false
        }
    }

    componentDidMount() {
        if (this.props.note) {
            const note = this.props.note;
            this.setState({ note: note });
        } else {
            const id = this.props.match.params.id;
            this.fetchNote(id);
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id);
        }
    }

    fetchNote (id) {
        id = parseInt(id, 10);
        const note = this.props.notes.filter(note => note.id === id)[0];
        this.setState({
            note: note,
            id: id
        })
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleUpdate (id, note)  {
        this.props.updateNote(note);
        this.setState({edit: false})
    }

    toggleModal() {
        this.setState({modal: !this.state.modal})
    }

    render() {
        const { title, body } = this.state.note;
        const { edit, modal, id } = this.state;
        return (
            <div>
                {edit ? (
                    <div>
                        <h3>Edit Note:</h3>
                        <form>
                            <input name="title" value={title} placeholder="Note Title" onChange={(e) => this.handleChange(e)}/>
                            <input name="body" value={body} placeholder="Note Content" onChange={(e) => this.handleChange(e)}/>
                            <button onClick={() => this.handleUpdate(id, {title, body})}>Update</button>
                        </form>
                    </div>
                ):(
                    <div>
                        <div>
                            <button onClick={() => this.setState({edit: true})}>Edit</button>
                            <button onClick={() => this.toggleModal}>Delete</button>
                        </div>
                        <h3>{title}</h3>
                        <div>{body}</div>
                    </div>
                )}
                {modal ? (
                    <Modal isOpen={modal} toggle={() => this.toggle} className={this.props.className}>
                      <ModalHeader toggle={() => this.toggle}>Modal title</ModalHeader>
                      <ModalBody>
                        Are you sure you want to delete this?
                      </ModalBody>
                      <ModalFooter>
                        <button onClick={() => this.props.deleteNote(id)}>Do Something</button>
                        <button onClick={() => this.toggle}>Cancel</button>
                      </ModalFooter>
                    </Modal>
                ) : (null)}
            </div>
        );
    }
}

export default Note;
