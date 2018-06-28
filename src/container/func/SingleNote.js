import React, { Component } from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../component.css';

class SingleNote extends Component{

    deleteNote = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/delete/${this.props.NoteData._id}`)
            .then(response => {
                console.log(response)
                this.props.history.push('/Notes')
            })
            .catch(err => {
                console.log("errorMessage : ", err)
            })
    }

    render() {
        return (
            <div className="note-container">
                <div className="SN_header">
                    <Button ><Link to={`/Create/edit/${this.props.NoteData.title}`} >Edit</Link></Button>
                    <Button onClick={this.deleteNote}><Link to="/Notes" >Delete</Link></Button>
                </div>
            
            
                <div >
                    <Card>
                        <CardBody>
                            <CardTitle>{this.props.NoteData.title} </CardTitle>
                            <CardTitle>{this.props.NoteData.content} </CardTitle>
                            <CardTitle>{this.props.NoteData.id} </CardTitle>
                            <CardTitle>{this.props.NoteData.notesList} </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }      
}

export default SingleNote;