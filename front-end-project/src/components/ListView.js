import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap'
import '../styles/ListView.css'

const ListView = props => {
    return (
            <div className="main-text">
                <h3 style={{ textAlign: "left" }}> Your Notes: </h3>
        <CardGroup className="allNotes">
            {props.notes.length > 0 ? props.notes.map(note => {
            let wiggleRoom = 150 - 3
            const maxLength = wiggleRoom;
                return (
                        <NavLink to={`/note/${note.id}`} style={{textDecoration: 'none'}} key={note.id}>
                        <Card className="card mein-card">
                            <CardBody className="card-body">
                                <CardTitle className="card-title" style={{fontSize: '1.7rem', marginTop: '-1rem', fontWeight: 'bold'}}> {note.title.title.length > 12 ? note.title.title.slice(0, 12) + '...' : note.title.title} </CardTitle>
                                <CardText className="card-text card-content" style={{marginTop: '.5rem', paddingTop: '.5rem'}}> {note.title.content.length > maxLength ? note.title.content.slice(0, maxLength) + '...' : note.title.content} </CardText>
                            </CardBody>
                        </Card>
                        </NavLink>
                    )
                }
            ) : null
        } 
        </CardGroup>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps)(ListView)