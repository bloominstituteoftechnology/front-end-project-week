import React from 'react'
import Styled from 'styled-components';
import {Heading} from './../styles/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteModal from './Delete';

const NoteContainer = Styled.div`
display: block;
width: 100%;
padding: 10px 25px;
background: #F3F3F3;
`;

const Body = Styled.p`
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
    font-size: 14px;
    overflow: hidden;
`;
const Container = Styled.div`
  display: flex;
`;

const Edit = Styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
margin-bottom: 20px;
`;

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            modalOpen: false
        }
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({modalOpen: !this.state.modalOpen})
    }

    deleteNote = () => {
        this.setState
    }

   componentDidMount () {
    console.log(this.props);

    //console.log(this.props.match.params.id);
      //  this.fetchNote(this.props.match.params.id);
     //   console.log(this.props.match.params.id);
    }

   /* fetchNote = (id) => {
        axios
        .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            console.log(response);
            this.setState({note: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }*/

    render() {
    return (
        <Container>
        {this.state.modalOpen ? <DeleteModal toggleModal={this.openModal}/> : null}
        <NoteContainer>
            <Edit>
            <Link to={{pathname: `/edit/${this.props.location.state.id}`, state: {title: this.props.location.state.title, body: this.props.location.state.body}}} style={{color: '#4A4A4A', marginRight: '15px', fontSize: '14px'}}>edit</Link>
            <a onClick={this.openModal}>delete</a>
            </Edit>
        <Heading>{this.props.location.state.title}</Heading>
        <Body>{this.props.location.state.body}</Body>
        </NoteContainer>
        </Container>
    )
}
}


export default Note;

/*class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            title: "",
            body: ""
        }
    }
    
    componentDidMount () {
        const id = this.props.match.params.id;
        this.setState({notes: data[this.props.match.params.id-1]})
        
        
console.log(this.props.match.params.id)
console.log(this.state)
console.log(this.state.note)
console.log(this.props.body)
    }

render() {*/