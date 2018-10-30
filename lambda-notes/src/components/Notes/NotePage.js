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
            title: '',
            textBody: '',
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
            isEditing: !prevState.isEditing
        }));
    }

    deleteHandler = () => {
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
            const newNote = Object.assign({}, { title: this.state.title, textBody: this.state.textBody });
            axios
                .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, newNote)
                .then(() => this.setState({
                    isEditing: false
                }))
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
                        <div className="note-page-wrapper view-wrapper">
                            <h1>Page Not Found 404</h1>
                        </div>
                    )
                }
                return (
                    <div className="note-page-wrapper view-wrapper">
                        <h1>Loading...</h1>
                    </div>
                )
            } else {
                return (
                    <div className="view-wrapper">
                        <div onClick={this.editHandler}>{!this.state.isEditing ? 'edit' : 'cancel'}</div>
                        <div onClick={this.deleteHandler}>delete</div>
                        {!this.state.isEditing ?
                            <div>
                                <h3 className="view-header">{this.state.title}</h3>
                                <p className="view-paragraph">{this.state.textBody}</p>
                            </div> :
                            <form onSubmit={this.submitHandler}>
                                <input
                                    type="text"
                                    name="title"
                                    onChange={this.changeHandler}
                                    value={this.state.title}
                                />
                                <input
                                    type="text"
                                    name="textBody"
                                    onChange={this.changeHandler}
                                    value={this.state.textBody}
                                />
                                <button type="submit">Submit</button>
                            </form>}
                    </div>
                )
            }
        }
    }
}

export default NotePage;