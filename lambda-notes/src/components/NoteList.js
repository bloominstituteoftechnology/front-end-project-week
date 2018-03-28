import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardText, CardDeck, Col, Row } from 'reactstrap';
import './NoteList.css';

class NoteList extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    this.setState({ notes: this.props.notes })
  }

  render() {
    return (
      <Col xs='9' className='list'>
        <h4 className='list__title d-flex flex-start mt-5 mb-4 ml-3'>Your Notes:</h4>
        <Row className='noteGrid mx-2'>
          {this.state.notes.map(note => {
            return (
            <Col xs='4' className='noteCard' key={note.id}>
            <CardDeck>
              <Link
                className='link text-left'
                to={{
                  pathname: `/notes/${ note.id }`,
                  state: { currentNote: note }
                }}
              >
              <Card className='card mb-3 mx-2'>
                <CardBody className='body'>
                  <CardTitle className='ctitle border-bottom pb-2'>{ note.title }</CardTitle>
                  <CardText className='text'>{ note.body }</CardText>
                </CardBody>
              </Card>
              </Link>
          </CardDeck>
              </Col>
            )
          })}
        </Row>
      </Col>
    )
  }
}

export default NoteList;