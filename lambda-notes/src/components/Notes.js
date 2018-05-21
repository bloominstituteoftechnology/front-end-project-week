import React, { Component } from 'react';
import axios from 'axios';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.fetchNotes()
    }

    fetchNotes = () => {
        axios
        .get('http://localhost:5000/notes')
        .then( res => {
            this.setState({notes: res.data})
        })
        .catch( err => {
            console.log(err)
        })
    }

    render() { 
        return (
            <Container>Your Notes: 
                <Row>
                    {this.state.notes.map( note => {
                        return <NoteThumbnail note={note}/>
                    })}
                </Row>
            </Container>
        )
    }
}
 
export default Notes;