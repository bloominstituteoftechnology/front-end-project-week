import React, { Component } from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { MarkdownPreview } from "react-marked-markdown";

 class Note extends Component {
  render() {
    return (
      <div className="note-container">
        {/* <h1>{this.props.title}</h1>
        <p>{this.props.content}</p> */}
        <Card>
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText> <MarkdownPreview value={this.props.content} />
                  </CardText>
            </CardBody>
        </Card>
      </div>
    )
  }
}

export default Note;