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

    // get individual note from api when component mounts based on url id
    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    // write input text to state when change in field when editing
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // gets note based on id in url and sets isLoaded to true
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

    // toggle when edit/cancel button is pressed
    editHandler = () => {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing,
            tempTitle: prevState.title,
            tempTextBody: prevState.textBody
        }));
    }

    // modal toggle for when delete button is pressed (delete confirmation modal)
    modalToggle = () => {
        this.setState(prevState => ({
            modalShowing: !prevState.modalShowing
        }))
    }

    // delete pressed on delete confirmation modal, deletes note from api and sets redirect to true
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

    // edit view form submitted, puts new information to API if not empty and sets isEditing to false
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
            {/* redirect to home page if note is deleted */ }
            return <Redirect to="/" />
        } else {
            if (!this.state.isLoaded) {
                if (this.state.error) {
                    {/* state not loaded in, if id does not exist in api */ }
                    return (
                        <div className="view-wrapper">
                            <h1>Page Not Found 404</h1>
                        </div>
                    )
                }
                return (
                    <div className="view-wrapper"> {/* state not loaded in, no response from api yet */}
                        <h1>Loading...</h1>
                    </div>
                )
            } else {
                return (
                    <div className="view-wrapper">
                        <h3 className="view-header">{!this.state.isEditing ? this.state.title : 'Edit Note:'}</h3> {/* toggles heading of page based on view */}
                        <div className="action-wrapper">
                            <button className="edit-cancel-button" onClick={this.editHandler}>{!this.state.isEditing ? 'Edit' : 'Cancel'}</button> {/* toggles edit/cancel button text */}
                            <button className="delete-button" onClick={this.modalToggle}>Delete</button>
                        </div>
                        {!this.state.isEditing ?
                            <div>
                                <p className="view-paragraph">{this.state.textBody}</p>
                            </div> :
                            // display note paragraph if not editing
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
                            </form>
                            // display form if editing
                        }
                        {!this.state.modalShowing ? null :
                            <div className="delete-modal">
                                <div className="delete-modal-content">
                                    <div className="delete-modal-header">Are you sure you want to delete this?</div>
                                    <button className="delete-button" onClick={this.deleteFunction}>Delete</button>
                                    <button className="no-button" onClick={this.modalToggle}>No</button>
                                </div>
                            </div> // displays if modal is showing (original delete button pressed)
                        }
                    </div >
                )
            }
        }
    }
}

export default NotePage;