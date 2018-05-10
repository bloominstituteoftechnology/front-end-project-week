import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

function NotesList (props) {
    console.log('props', props)
        return (
            <div className='row'>
                <div className='col-sm'>

                    {props.notes.map((note) => (
                        <div className='col-sm'>   
                            <Card key={note.title} className='col-3'>
                                <CardBody>
                                    <CardTitle>{note.id}.{note.title}</CardTitle>
                                    <CardText>{note.text}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))}

                </div>
            </div>
        )
    
}
   
export default NotesList
