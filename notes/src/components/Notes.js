import React, { Component } from 'react';
import NoteThumbnail from './NoteThumbnail';
import { Container, Row } from 'reactstrap';
class Notes extends Component {

        render() { 
        return (
            <Container>
                <h3 className="heading">Your Notes:</h3> 
                <Row className="notes-section">
                    {this.props.state.notes.map( note => {
                        return <NoteThumbnail note={note} key={note.id}/>
                    })}
                </Row>
            </Container>
        )
    }
}
 
export default Notes;