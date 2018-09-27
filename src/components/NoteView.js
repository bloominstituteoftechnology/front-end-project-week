import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Container } from 'reactstrap';
import DeleteModal from './DeleteModal';
import { MarkdownPreview } from 'react-marked-markdown';


/* const H1 = styled.h1`
   
        margin-top: 10px;
        font-weight: bold;
        font-size: 2.2rem;
        border-bottom: 1px solid gray;
        line-height: 2.5;

'
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
` */
const H1 = styled.h1`
        margin-top: 10px;
        font-weight: bold;
        font-size: 2.2rem;
        border-bottom: 1px solid gray;
        line-height: 2.5;

`
const BContainer = styled.div`

        display: flex;
        justify-content: flex-end;
    
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
            <Container style={{border: '1px solid gray', borderRadius: '5px', padding: '10px', marginTop: '10px'}}>
                <BContainer>
                <Button color='link'><Link to={`/edit-note/${this.state.id}`}> Edit </Link></Button>
                <DeleteModal delete={() => this.delete(this.state.id)} title={this.state.title}/>
                </BContainer>
                <H1>{this.state.title}</H1>
                <MarkdownPreview value={this.state.content} />
                <Button outline color='secondary' size='lg'><Link to={`/notes`} style={{color: 'black', textDecoration: 'none'}}>Back to Notes</Link></Button>
            </Container>
         );
    }
}
 
export default NoteView;