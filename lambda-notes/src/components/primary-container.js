import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes, saveNote } from '../REDUX/actions';

class PrimaryContainer extends Component {

  componentDidMount() { this.props.getNotes() }

  cardFactory = note => {
    const contentLength = note.content.split(" ");
    return (
      // <Card key={note.id} className="col-4 NoteCard">
      //   <Link to={{ pathname: `/viewnote/${note.id}`, state: { viewNote: {note} } }}>
      //     <CardTitle className="NoteTitle">{note.title}</CardTitle>
      //   </Link>
      //   <CardBody className="NoteContent">
      //     { contentLength.length >= 17 ? `${contentLength.slice(0, 17).join(" ")} ...` : note.content }
      //   </CardBody>
      // </Card>
      <Col md="12" lg="6" xl="4" className="NoteCard">
        <Link key={note.id} to={{ pathname: `/viewnote/${note.id}`, state: { viewNote: {note} } }} className="CardLink">
          <Card className="">
            <CardBody className="CardContent">
              <CardTitle className="CardTitle">{note.title}</CardTitle>
              <CardText className="CardText">
                { contentLength.length >= 17 ? `${contentLength.slice(0, 17).join(" ")} ...` : note.content }
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    )
  }

  render() {
    return (
      <div className="PrimaryContainer">
        <h1 className="PrimaryContainer__header">Your Notes:</h1>
        <div className="PrimaryContainer__cardContainer">
          {this.props.notes.map(note => this.cardFactory(note))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ notes: state.notes })

export default connect(mapStateToProps, { getNotes, saveNote })(PrimaryContainer);