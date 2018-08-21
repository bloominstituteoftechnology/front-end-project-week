import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ViewNote = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    > h1 {
        margin-top: 10px;
        font-weight: bold;

    }
    > p {
        margin: 10px 0;
        font-size: 1.2rem;

    }

`

const ButtonsContainer = styled.div`

        text-align: right;

    > a {
        text-decoration: underline;
        color: black;
        margin-left: 10px;
        cursor: pointer;
    }

`


const URL = 'http://localhost:5000/notes/';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: ''
            
         }
    }

    componentDidMount() {
        
        let id = Number(this.props.match.params.id);
        axios.get(URL)
            .then(response => {
                let matching = response.data.find(note => note.id === id);
                this.setState({
                    title: matching.title,
                    content: matching.content,
                    id: matching.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    delete = (id) => {
        axios.delete(`${URL}${id}`)
        .then(response => {
            this.setState({
                notes: response.data
            })
            window.location = '/notes';
        })
        .catch(error => {
          console.log(error);
        })
      }

    render() {
        return ( 
            <ViewNote>
                <ButtonsContainer>
                <Link to={`/notes/${this.state.id}`}> Edit </Link>
                <a onClick={() => this.delete(this.state.id)}>Delete</a>
                </ButtonsContainer>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <Link to={`/notes`}><button>Back</button></Link>
            </ViewNote>
         );
    }
}
 
export default NoteView;