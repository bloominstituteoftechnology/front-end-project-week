import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class NotesList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {props.data.notes.map((note, index) => {
                    return (
                        
                        <Card key={index} className='col-3'>
                            <CardBody>
                                <CardTitle>{note.noteId}.{note.noteTitle}</CardTitle>
                                <CardText>{note.noteText}</CardText>
                            </CardBody>
                        </Card>
                    )
                    
                }
                    
            </div>
        )
    }
}


export default NotesList
