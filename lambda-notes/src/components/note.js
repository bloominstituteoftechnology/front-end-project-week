import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";

class Note extends Component {

  handleClickNote = () => {
    this.props.updateSelectedNote({ title: this.props.title, content: this.props.content });
    this.props.history.push('/notes-view');
  }

  render() {
    return (
      <div className="note-container">
        <Card onClick={this.handleClickNote}>
          <CardBody>
            <CardTitle><h4>{this.props.title}</h4></CardTitle>
            <hr />
            <CardText>{this.props.content}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

}
export default withRouter(Note);
