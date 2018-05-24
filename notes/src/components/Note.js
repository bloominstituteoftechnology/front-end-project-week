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
                    { note? 
                        (<Col className="single-note">
                    
                    <div className="edit-delete">
                        <Link to={`/edit/${note._id}`}>
                            <div className="edit">edit</div>
                        </Link>
                        <DeleteNote noteID={note._id} removeNote={this.props.removeNote}/>
                    </div>
                    <h1>{note.title}</h1>
                    <p className="single-note-body">{note.textBody}</p>
                </Col>)
                        :
                        ('')
                    }
                    
                </Row>
            </Container>
         )
    }
}

export default Note;