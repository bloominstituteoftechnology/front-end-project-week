import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NoteViewContainer = styled.div`
    padding: 20px 3% 0 0;
`

const EditDeleteContainer = styled.div`
    float: right;
`

const EditDeleteLink = styled(Link)`
    color: #4A494A;
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: underline;
    margin-left: 15px;
`

const NoteContainer = styled.section`
    padding-top: 40px;
`

const NoteTitle = styled.h2`
    color: #4A494A;
    font-size: 1.4rem;
    margin-bottom: 30px;
    font-weight: bold;
`

const NoteBody = styled.div`
    font-size: 0.9rem;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
`

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
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
                this.setState({ note: response.data })
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div>
                <NoteViewContainer>
                    <EditDeleteContainer>
                        <EditDeleteLink to={`/edit/${this.props.match.params.id}`}>edit</EditDeleteLink>
                        <EditDeleteLink to={`/notes/delete/${this.props.match.params.id}`}>delete</EditDeleteLink>
                    </EditDeleteContainer>
                    <NoteContainer>
                        <NoteTitle>{this.state.note.title}</NoteTitle>
                        <NoteBody>{this.state.note.textBody}</NoteBody>
                    </NoteContainer>
                </NoteViewContainer>
            </div>
        )
    };
}

export default NoteView;