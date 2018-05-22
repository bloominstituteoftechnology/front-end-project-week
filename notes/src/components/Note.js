import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            id: '',
            edit: false,
            modal: false
        }
    }
    
    componentDidMount() {
        const { title, body, id } = this.props.note;
        this.setState({ title, body, id});
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleUpdate = (id, note) => {
        this.props.updateNote(note);
        this.setState({edit: false})
    }

    toggleModal() {
        this.setState({modal: !this.state.modal})
    }

    render() {
        const { title, body, edit, modal, id } = this.state;
        return (
            <div>
                {edit ? (
                    <div>
                        <h3>Edit Note:</h3>
                        <form>
                            <input name="title" value={title} placeholder="Note Title" onChange={(e) =>     this.handleChange(e)}/>
                            <input name="body" value={body} placeholder="Note Content" onChange={(e) =>     this.handleChange(e)}/>
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
                ): null}
            </div>
        );
    }
}

export default Note;