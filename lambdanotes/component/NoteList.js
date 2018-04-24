import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardText, CardDeck, Col, Row } from 'reactstrap';
import './Notes.css';

export default class NoteList extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    this.setState({ notes: this.props.notes })
  }
  
  render() {
    console.log('state', this.state)
    return (
      <Col xs='9' className='list px-4'>
        <h4 className='list__title text-left font-weight-bold mt-5 mb-4'>Your Notes:</h4>
        <Row className='list__grid'>
          {this.state.notes.map(note => {
            return (
            <Col xs='4' className='cardCol' key={note.id}>
            <CardDeck>
              <Link
                className='link text-left'
                to={`/notes/${ note.id }`
                }
              >
              <Card className='card mb-3 mx-2'>
                <CardBody className='card__body'>
                  <CardTitle className='card__title border-bottom pb-2'>{ note.title }</CardTitle>
                  <CardText className='card__content'>{ note.content }</CardText>
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