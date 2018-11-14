import React from 'react';
import axios from 'axios';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.note = {
            title: '',
            textBody: ''
        }

        this.state = {
            error: null,
            loading: false,
            note: this.note
        }
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
                { this.state.loading === true ? <h1>Loading...</h1>: null }
                { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default Note;