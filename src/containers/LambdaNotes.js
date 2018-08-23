import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ComponentContainer = styled.div`

    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-left: 10px;
    background: #F3F3F3;
`

const HeaderStyle = styled.h3`
  border-bottom: 1px solid black;
  width: 80%;
  padding-bottom: 5px;
`
const NotesContainer = styled.div`
  width: 23%;
  height: 230px;
  padding-left: 20px;
  margin-left: 20px;
  border: 1px solid #979797
`

class LambdaNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:9000/').then(res => {
            console.log('res', res)
            this.setState({ notes: res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
    return(
        <ComponentContainer>
    {
        this.state.notes.map(note => {
            return (
                <NotesContainer key={note.id}>
                    <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <HeaderStyle>{note.title}</HeaderStyle>
                        <p>{note.content}</p>
                    </Link>
                </NotesContainer>
            )
        })
    }
        </ComponentContainer>
    )
    }
}

export default LambdaNotes;