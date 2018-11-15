import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.note = {
            title: '',
            textBody: ''
        }

        this.state = {
            deleting: false,
            error: null,
            loading: false,
            note: this.note
        }
    }

    deleteHandler = e => {
        e.preventDefault();
        this.setState({...this.state, deleting: true});
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
            .then( response => {
                this.props.history.push(`/`);
            })
            .catch( err => {
                this.setState({error: "Unable to delete note on server", deleting: false});
            })
    }

    componentDidMount() {
        this.setState({...this.state, loading: true});
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then( response => {
                this.setState({error: null, loading: false, note: response.data});
            })
            .catch( err => {
                this.setState({error: "Unable to retrieve note from server", loading: false, note: this.note});
            })
    }

    render() {
        return (
            <div className="note">
                <header>
                    <h2>{this.state.note.title}</h2>
                    <div className="options">
                        <Link to={`/edit/${this.state.note._id}`}>edit</Link>
                        <a href={`/delete/${this.state.note._id}`} onClick={this.deleteHandler}>delete</a>
                    </div>
                </header>
                { this.state.loading === true ? <h1>Loading...</h1> : null }
                { this.state.deleting === true ? <h1>Deleting...</h1> : null }
                { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default Note;