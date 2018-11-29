import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainContainer = styled.div`
    padding: 20px 3% 0 0;
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

const NoteBody = styled.p`
    font-size: 1.0rem;
    line-height: 1.8;
`

const LinkContainer = styled.div`
    float: right;
`

const Links = styled(Link)`
    color: #4A494A;
    font-size: 0.9rem;
    font-weight: bold;
    text-decoration: underline;
    margin-left: 15px;
`

class ViewNote extends Component {
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
                this.setState({note: response.data})
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <MainContainer>
                <LinkContainer>
                    <Links to={'/'}>Edit</Links>
                    <Links to={'/'}>Delete</Links>
                </LinkContainer>
                <NoteContainer>
                    <NoteTitle>{this.state.note.title}</NoteTitle>
                    <NoteBody>{this.state.note.textBody}</NoteBody>
                </NoteContainer>
            </MainContainer>
        )
    };
}

export default ViewNote;