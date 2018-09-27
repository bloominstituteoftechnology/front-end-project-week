import React, { Component } from 'react';
import axios from '../../node_modules/axios';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
        }
    }
    

    componentDidMount() {
        // const id = this.props.match.params.id;
        // axios 
        //     .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        //     .then(response => {
        //         console.log('Response: ', response);
        //         this.setState({ note: response.data });
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        const note = this.props.notes.find(note => note._id === this.props.match.params.id);
        this.setState({note});
    }

    render() {
        return (
            <div>
                <h1>{this.state.note.title}</h1>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default NoteView;