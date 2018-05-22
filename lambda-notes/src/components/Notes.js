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
            <Container>
                <h3 className="heading">Your Notes:</h3> 
                <Row className="notes-section">
                    {this.state.notes.map( note => {
                        return <NoteThumbnail note={note} key={note.id}/>
                    })}
                </Row>
            </Container>
        )
    }
}
 
export default Notes;