import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DeleteNote } from './index';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("Note Props:", this.props.match.params.id)
        console.log(this.props)
        const whatever = this.props.list.filter(note => {
           return note._id === this.props.match.params.id;
        })
        const note = whatever[0];
        return ( 
            <Container>
                <Row>
                    <Col className="single-note">
                        <div className="edit-delete">
                            <Link to="/edit">
                                <div className="edit">edit</div>
                            </Link>
                            <DeleteNote />
                        </div>
                        <h1>{note ? note.title : ''}</h1>
                        <p>{note ? note.textBody : ''}</p>
                    </Col>
                </Row>
            </Container>
         )
    }
}

export default Note;