import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardFooter, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';

export class CardFactory extends Component {
  state = { tags: [] };

  handleTags = tags => { this.setState({ tags }) };

  render() {
    const { note } = this.props;
    const contentLength = note.content.split(" ");
    return (
      <Col 
        md="12" 
        lg={this.props.listView ? "12" : "6"} 
        xl={this.props.listView ? "12" : "4"} 
        className="NoteCard" 
        key={note.id}
      >
        <Link to={{ pathname: `/viewnote/${note.id}`, state: { viewNote: {note} } }} className="CardLink">
          <Card className="Card">
            <CardBody className="CardContent">
              <CardTitle className="CardTitle">{note.title}</CardTitle>
              <CardText className="CardText">
                { contentLength.length >= 17 ? `${contentLength.slice(0, 17).join(" ")} ...` : note.content }
              </CardText>
            </CardBody>
            <CardFooter>
              <TagsInput value={this.state.tags} onChange={() => this.handleTags()} />
            </CardFooter>
          </Card>
        </Link>
      </Col>
    )
  }
}

const mapStateToProps = state => ({ notes: state.notes });
export default connect(mapStateToProps, {})(CardFactory);