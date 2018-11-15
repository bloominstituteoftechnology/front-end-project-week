import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import styled from 'styled-components';

const Container = styled.div`
  overflow-wrap: break-word;
  /* min-width: 100%; */
  max-width: 880px;
`;

const NoteContainer = styled.div`
    padding: 0px 25px;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 20px;
    padding-right: 20px;
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
                <Actions>
                    <Link to='/' style={{ color: 'black' }}>edit</Link>
                    <Link to='/' style={{ paddingLeft: '10px', color: 'black' }}>delete</Link>
                </Actions>
                <NoteContainer>
                    <h2>{this.state.note.title}</h2>
                    <p style={{ lineHeight: '2'}}>{this.state.note.textBody}</p>
                </NoteContainer>
            </Container>
        )
    }
}