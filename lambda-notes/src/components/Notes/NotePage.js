import React from 'react';
import axios from 'axios';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isLoaded: false,
            title: '',
            textBody: '',
            error: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                //console.log('note page', response)
                if (response.data.name) {
                    //console.log("name", response.data.name);
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

    render() {
        if (!this.state.isLoaded) {
            if (this.state.error) {
                return (
                    <div className="note-page-wrapper">
                        <h1>Page Not Found 404</h1>
                    </div>
                )
            }
            return (
                <div className="note-page-wrapper">
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div className="note-page-wrapper">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.textBody}</p>
                </div>
            )
        }
    }
}

export default NotePage;