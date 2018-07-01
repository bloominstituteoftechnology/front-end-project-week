import React, { Component } from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../component.css';

const api = process.env.REACT_APP_API || 'https://sheltered-sands-52060.herokuapp.com';
const token = localStorage.getItem('jwt');
const requestOptions = {
    headers: {
        Authorization: token
    },
}

class SingleNote extends Component{

    deleteNote = (e) => {
        e.preventDefault();
        axios.delete(`${api}/api/delete/${this.props.NoteData._id}`, requestOptions)
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