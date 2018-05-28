import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateNote, deleteNote } from "../actions";

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
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
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
        const { title, body, id, edit, modal } = this.state;
        return (
            <div className="note-flex-props">
                <div className="note-view">
                    {edit ? (
                        <div className="note-form">
                            <h3>Edit Note:</h3>
                            <form>
                                <input name="title" value={title} placeholder="Note Title" onChange={(e) => this.handleChange(e)}/>
                                <textarea name="body" value={body} placeholder="Note Content" onChange={(e) => this.handleChange(e)}/>
                                <button className="button" onClick={(e) => this.handleUpdate(e, {title, body, id})}>Save</button>
                            </form>
                        </div>
                    ) : (
                        <div className="display">
                            <div className="note-view-actions">
                                <a onClick={() => this.setState({edit: true})}>edit</a>
                                <a onClick={() => this.toggleModal()}>delete</a>
                            </div>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </div>
                    )}
                    {modal ? (
                        <div>
                            <div className="modal-background"></div>
                            <div className="modal-position">
                                <div className="modal">
                                    <p>Are you sure you want to delete this?</p>
                                        <div className="modal-actions">
                                            <Link className="button delete" to="/" onClick={() =>   this.handleDelete(id)}>Delete</Link>
                                            <div className="modal-divider"></div>
                                            <button className="button" onClick={() => this.toggleModal()}   >Cancel</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ) : (null)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { updateNote, deleteNote })(Note);