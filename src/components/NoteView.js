import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';
import DeleteModal from './DeleteModal';
import { MarkdownPreview } from 'react-marked-markdown';


const ViewNote = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    background: #DCDCDC;

    > h1 {
        margin-top: 10px;
        font-weight: bold;
        font-size: 2.2rem;
        border-bottom: 1px solid gray;
        line-height: 2.5;

    }
    > p {
        margin: 10px 0;
        font-size: 1.4rem;
        line-height: 1.6;

    }

    > a {
    > button {
        background: #20B2AA;
        border: 1px solid gray;
        color: white;
        width: 25%;
        height: 35px;
    }
    }
`

const ButtonsContainer = styled.div`

        display: flex;
        justify-content: flex-end;

    > a {
        text-decoration: underline;
        color: black;
        margin: 0 10px;
        cursor: pointer;
        font-size: 1.4rem;
    }
`


const URL = 'http://localhost:9000/notes/';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: ''         
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
                <Button color='link'><Link to={`/edit-note/${this.state.id}`}> Edit </Link></Button>
                <DeleteModal delete={() => this.delete(this.state.id)} title={this.state.title}/>
                </ButtonsContainer>
                <h1>{this.state.title}</h1>
                <MarkdownPreview value={this.state.content} />
                <Link to={`/notes`}><button>Back</button></Link>
            </ViewNote>
         );
    }
}
 
export default NoteView;