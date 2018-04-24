import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes, saveNote } from '../REDUX/actions';

class PrimaryContainer extends Component {
  constructor() {
    super();
    this.state = { listView: false }
  }

  componentDidMount() { this.props.getNotes() }

  cardFactory = note => {
    const contentLength = note.content.split(" ");
    return (
      <Col 
        md="12" 
        lg={this.state.listView ? "12" : "6"} 
        xl={this.state.listView ? "12" : "4"} 
        className="NoteCard" 
        key={note.id}
      >
        <Link to={{ pathname: `/viewnote/${note.id}`, state: { viewNote: {note} } }} className={this.props.night ? "CardLink--dark" : "CardLink"}>
          <Card className={this.props.night ? "Card--dark" : "Card"}>
            <CardBody className="CardContent">
              <CardTitle className={this.props.night ? "CardTitle--dark" : "CardTitle"}>{note.title}</CardTitle>
              <CardText className={this.props.night ? "CardText--dark" : "CardText"}>
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
        <h1 className={this.props.night ? "PrimaryContainer__header--dark" : "PrimaryContainer__header"}>Your Notes:</h1>
        <div className="PrimaryContainer__cardContainer">
          {this.props.notes.map(note => this.cardFactory(note))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ notes: state.notes, night: state.night })

export default connect(mapStateToProps, { getNotes, saveNote })(PrimaryContainer);