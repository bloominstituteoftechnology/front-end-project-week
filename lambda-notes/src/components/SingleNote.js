import React, { Component } from 'react';

import axios from 'axios';


import Notes from './Notes'

export default class SingleNote extends Component {
    // console.log(this.props)
    constructor(props) {
        super(props);
        this.state = {
            note: []
        }
    
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id)
        this.fetchNote(id)
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                // console.log(response)
                this.setState({ note: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        // console.log(this.state.note)
        if(this.state.note.length===0) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <Notes
                    title = {this.state.note.title}
                    textBody = {this.state.note.textBody}
                    />
            </div>
        )
    }
}