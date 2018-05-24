import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap'
import '../styles/ListView.css'

const ListView = props => {
    return (
        <div className="main-text container">
            <div className="row yourNotes">
                <h3 style={{ textAlign: "left" }}> Your Notes: </h3>
                {console.log('Props of ListView?', props)}
            </div>
        <CardGroup>
            {props.notes.length > 0 ? props.notes.map(note => {console.log('Note', note)
                return (
                        <NavLink to={`/note/${note.id}`} style={{textDecoration: 'none'}} key={note.id}>
                        <Card className="card mein-card">
                            <CardBody className="card-body">
                                <CardTitle className="card-title" style={{fontSize: '1.7rem', marginTop: '-1rem'}}> {note.title.title} </CardTitle>
                                <CardText className="card-text listViewNote truncate"> {note.title.content} </CardText>
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