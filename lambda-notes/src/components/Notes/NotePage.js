import React from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isLoaded: false,
            shouldRedirect: false,
            modalShowing: false,
            title: '',
            tempTitle: '',
            textBody: '',
            tempTextBody: '',
            error: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                if (response.data.name) {
                    this.setState({
                        error: true
                    })
                } else {
                    this.setState({
                        title: response.data.title,
                        textBody: response.data.textBody,
                        isLoaded: true
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    editHandler = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing,
            tempTitle: prevState.title,
            tempTextBody: prevState.textBody
        }));
    }

    modalToggle = () => {
        this.setState(prevState => ({
            modalShowing: !prevState.modalShowing
        }))
    }

    deleteFunction = () => {
        const id = this.props.match.params.id;
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(() => {
                this.setState({
                    shouldRedirect: true
                })
            })
            .catch(err => console.log(err));
    }

    submitHandler = (event) => {
        if (this.state.title && this.state.textBody) {
            event.preventDefault();
            event.stopPropagation();
            const id = this.props.match.params.id;
            const editNote = Object.assign({}, { title: this.state.tempTitle, textBody: this.state.tempTextBody });
            axios
                .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, editNote)
                .then((response) => {
                    this.setState({
                        isEditing: false,
                        title: response.data.title,
                        textBody: response.data.textBody
                    });
                })
                .catch(err => console.log(err));
        }
    }

render() {
    if (this.state.shouldRedirect) {
        return <Redirect to="/" />
    } else {
        if (!this.state.isLoaded) {
            if (this.state.error) {
                return (
                    <div className="view-wrapper">
                        <h1>Page Not Found 404</h1>
                    </div>
                )
            }
            return (
                <div className="view-wrapper">
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div className="view-wrapper">
                    <h3 className="view-header">{!this.state.isEditing ? this.state.title : 'Edit Note:'}</h3>
                    <div className="action-wrapper">
                        <button className="edit-cancel-button" onClick={this.editHandler}>{!this.state.isEditing ? 'Edit' : 'Cancel'}</button>
                        <button className="delete-button" onClick={this.modalToggle}>Delete</button>
                    </div>
                    {!this.state.isEditing ?
                        <div>
                            <p className="view-paragraph">{this.state.textBody}</p>
                        </div> :
                        <form onSubmit={this.submitHandler} className="note-form">
                            <input
                                type="text"
                                name="tempTitle"
                                className="note-title"
                                onChange={this.changeHandler}
                                value={this.state.tempTitle}
                            />
                            <textarea
                                type="text"
                                name="tempTextBody"
                                className="note-content"
                                onChange={this.changeHandler}
                                value={this.state.tempTextBody}
                            />
                            <button type="submit" className="note-button">Submit</button>
                        </form>}
                    {!this.state.modalShowing ? null :
                        <div className="delete-modal">
                            <div className="delete-modal-content">
                                <div className="delete-modal-header">Are you sure you want to delete this?</div>
                                <button className="delete-button" onClick={this.deleteFunction}>Delete</button>
                                <button className="no-button" onClick={this.modalToggle}>No</button>
                            </div>
                        </div>
                    }
                </div>
            )
        }
    }
}
}

export default NotePage;