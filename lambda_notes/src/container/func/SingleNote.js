import React, { Component } from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SingleNote extends Component{

    deleteBtn = () => {

    }
    render() {
        console.log("SingleProp", this.props)
        return (
            <div className="note-container">
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.NoteData.title} </CardTitle>
                        <CardTitle>{this.props.NoteData.content} </CardTitle>
                        <CardTitle>{this.props.NoteData.id} </CardTitle>
                        <CardTitle>{this.props.NoteData.notesList} </CardTitle>
                    </CardBody>
                    <div>
                        <Button bsStyle="warning"><Link to="/Create" >Edit</Link></Button>
                    </div>
                    <div>
                        <Button bsStyle="danger" onClick={this.props.DeleteData}><Link to="/Notes" >Delete</Link></Button>
                    </div>
                </Card>
            </div>
        )
    }      
}

export default SingleNote;