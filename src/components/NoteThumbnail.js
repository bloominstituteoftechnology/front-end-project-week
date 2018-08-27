import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router';

class NoteThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.note._id,
      title: props.note.title,
      content: props.note.content
    }
  }

  render() {
    return (
        <Link to={`/note/${this.state.id}`} className="note-link">
            <Card className="note-thumbnail">
                <CardBody>
                    <CardTitle className="note-title heading">{this.state.title}</CardTitle>
                    <ReactMarkdown source={this.state.content} className="thumbnail-content"/>
                </CardBody>
            </Card>
        </Link>
    )
  }
}
 
export default withRouter(NoteThumbnail);