import React, { Component } from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../component.css';

class SingleNote extends Component{

    deleteNote = (e) => {
        e.preventDefault();
        this.props.DeleteData(this.props.NoteData.id)
    }

    render() {
        console.log("SingleProp", this.props)
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