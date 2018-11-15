import React from 'react';
import axios from 'axios';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            creating: false,
            loading: false,
            updating: false,
            title: '',
            textBody: '',
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        if (this.props.match.params.id) {
            this.setState({...this.state, updating: true});
            axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, note)
                .then( response => {
                    this.props.history.push(`/note/${response.data._id}`);
                })
                .catch( err => {
                    this.setState({error: "Unable to update note on server", updating: false});
                })
        } else {
            this.setState({...this.state, creating: true});
            axios.post('https://fe-notes.herokuapp.com/note/create', note)
                .then( response => {
                    this.props.history.push(`/note/${response.data.success}`);
                })
                .catch( err => {
                    this.setState({error: "Unable to create note on server", creating: false});
                })
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({...this.state, loading: true});
            axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
                .then( response => {
                    this.setState({
                        error: null, 
                        loading: false, 
                        title: response.data.title, 
                        textBody: response.data.textBody
                    });
                })
                .catch( err => {
                    this.setState({error: "Unable to retrieve note from server", loading: false});
                })
        }
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h2>{ this.props.match.params.id ? "Update Note:" : "Create New Note:" }</h2>
                </header>
                <form className="note-form" onSubmit={this.handleSubmit}>
                    { this.state.loading === true ? <h1>Loading...</h1>: null }
                    { this.state.creating === true ? <h1>Creating...</h1>: null }
                    { this.state.updating === true ? <h1>Updating...</h1>: null }
                    { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.inputHandler}
                    />
                    <textarea
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.inputHandler}
                    />
                    <button type="submit">{ this.props.match.params.id ? "Update" : "Save" }</button>
                </form>
            </React.Fragment>
        )
    }
}

export default NoteForm;