import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NewNote.css';
import axios from 'axios';

class Newnote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes:[],
            title: '',
            textBody: ''
         }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
    addNote = note => {
        axios
          .post('https://killer-notes.herokuapp.com/note/create', note)
          .then(response => {
            this.setState(() =>({ note: [...response.data] }));
          })
          .catch(err => {
              console.log(err);
          })
    }

    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <h4 className="new-note-header">Create New Note:</h4>
                            <input className="new-note-title" placeholder="Note Title"/>
                        <div>
                            <input className="new-note-content" style={{ width:'600px', height:'400px' }} placeholder="Note Content"/>
                        </div>
                        <span>
                            <Link to="/">
                                <button className="save-button">Save</button>
                            </Link>
                        </span>
                    </Col>
                </Row>
            </Container>
         )
    }
}
 
export default Newnote;