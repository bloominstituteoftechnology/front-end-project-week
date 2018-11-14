import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Container = styled.div`
  background-color: rgb(242, 241, 242);
  overflow-wrap: break-word;
  width: 100%;
  min-width: 880px;
`;

const NoteContainer = styled.div`
    padding: 0px 25px;
`;

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
        console.log('Fetched!')
    }

    fetchNote = id => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState(() => ({ note : response.data }))
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        if (!this.state.note) {
            return <div>Loading note...</div>;
        }

        return (
            <Container>
                <NoteContainer>
                    <h2>{this.state.note.title}</h2>
                    <p>{this.state.note.textBody}</p>
                </NoteContainer>
            </Container>
        )
    }
}