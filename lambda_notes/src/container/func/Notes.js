import React, { Component } from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';
import '../components/components.css';

class Notes extends Component{

    render(){
        return (
            <div className="note-container">
                test Note
            <Card>
                    <CardBody>
                        <CardTitle>{this.props.NoteData.title} </CardTitle>
                        <CardTitle>{this.props.NoteData.content} </CardTitle>
                        <CardTitle>{this.props.NoteData.id} </CardTitle>
                        <CardTitle>{this.props.NoteData.notesList} </CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
         
}

export default Notes;