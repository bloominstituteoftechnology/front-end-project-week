import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

export class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: []
        };
    }

    // componentDidMount() {
    //     console.log(this.props.match.params.id);
    //     const id = this.props.match.params.id;
    //     this.fetchNote(id);
    // }

    // fetchNote = id => {
    //     axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    //     .then(response => {
    //         this.setState(() => ({ note: response.data }));
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    // }

    render() {
        return (
            <div>
                <h4>{this.props.note.title}</h4>
                <Route path={`/note/${this.state.note._id}`}
                    render={props => (
                    <h1>{props.note.title}</h1>
                )} />
            </div>
        )
    }
}

