import React from "react";
import { connect } from "react-redux";
import { updateNote, deleteNote, resetStore, logOut } from "../actions";

class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            noteId: '',
            edit: false,
            modal: false,
            success: null,
            error: null
        }
    }
    
    componentDidMount() {
        const token = localStorage.getItem('jwt');
        if (!token) { 
            this.props.resetStore();
            this.props.logOut();
            this.props.history.push('/');
        } else {
            const id = this.props.id;
            const noteId = this.props.match.params.id;
            this.mountNote(noteId);
        }
    }

    mountNote = noteId => {
        const note = this.props.notes.filter(note => note._id === noteId)[0];
        this.setState({
            title: note.title,
            body: note.body,
            noteId: note._id
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleUpdate = (e, noteId, note) => {
        e.preventDefault();
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        this.props.updateNote(noteId, note, requestOptions)
            .then(() => { 
                this.setState({ 
                    error: null,
                    success: `Note updated!`
                });
                setTimeout(() => {
                    this.setState({ success: null })
                }, 3000); 
            })
            .catch(err => {
                if (err.message.includes('401')) {
                    this.setState({
                        error: `Not Authorized. Please Log In.`
                    });
                    setTimeout(() => {
                        this.props.resetStore();
                        this.props.logOut();
                        this.props.history.push('/');
                    }, 4000);
                } else {
                    this.setState({
                        success: null,
                        error: `Error updating note. Please try again.`
                    });
                }
            });
        this.setState({ edit: false });
    }

    handleDelete = (noteId) => {
        this.toggleModal();
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        this.props.deleteNote(noteId, requestOptions)
            .then(() => this.props.history.push('/notes'))
            .catch(err => {
                if (err.message.includes('401')) {
                    this.setState({
                        error: `Not Authorized. Please Log In.`
                    });
                    setTimeout(() => {
                        this.props.resetStore();
                        this.props.logOut();
                        this.props.history.push('/');
                    }, 4000);
                } else {
                    this.setState({
                        success: null,
                        error: `Error updating note. Please try again.`
                    });
                }
            });
    }

    toggleModal() {
        this.setState({modal: !this.state.modal});
    }

    render() {
        const { title, body, noteId, edit, modal, success, error } = this.state;
        return (
            <div className="note-flex-props">
                <div className="note-view">

                    <div className="message">
                        {success ? (
                            <p className="success">{success}</p>
                        ) : (null)}

                        {error ? (
                            <p className="error">{error}</p>
                        ) : (null)}
                    </div>

                    {edit ? (
                        <div className="note-form">
                            <h3>Edit Note:</h3>
                            <form>
                                <input name="title" value={title} placeholder="Title" onChange={(e) => this.handleChange(e)}/>
                                <textarea name="body" value={body} placeholder="Content" onChange={(e) => this.handleChange(e)}/>
                                <button className="button" onClick={(e) => this.handleUpdate(e, noteId, {title, body})}>Save</button>
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
                                            <a className="button delete" to="/" onClick={() =>   this.handleDelete(noteId)}>Delete</a>
                                            <div className="modal-divider"></div>
                                            <a className="button" onClick={() => this.toggleModal()}>Cancel</a>
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

export default connect(mapStateToProps, { updateNote, deleteNote, resetStore, logOut })(Note);