import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: 4
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
                this.setState({note: response.data})
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div>
            <div>{this.state.note.title}</div>
            </div>
        )
    };
}

export default NoteView;