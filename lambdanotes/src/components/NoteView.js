import React, { Component } from 'react'
import axios from 'axios';

export default class NoteView extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            currentNote: []
        }
    }

    componentDidMount () {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(res => {
            this.setState({
                currentNote: res.data
            })
        })
    }

    render() {
        return (
            <div>
                    {this.state.currentNote.title}
                    {this.state.currentNote.textBody}
            </div>
        )
    }
}
