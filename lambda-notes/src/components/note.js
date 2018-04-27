import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { withRouter } from "react-router-dom";
import md from 'markdown-it';
import taskLists from 'markdown-it-task-lists';

class Note extends Component {
  constructor() {
    super();

    this.parser = md().use(taskLists, {enabled: true, label: true});
  }

  parseContent = () => {
    return this.parser.render(this.props.note.content);
  }

  handleClickNote = () => {
    this.props.updateClickedNote(this.props.note);
    this.props.history.push('/notes-view');
  }

  render() {
    return (
        <Card className="hvr-curl-top-right hvr-rotate mr-4" onClick={this.handleClickNote}>
          <CardBody>
            <CardTitle>{this.props.note.title}</CardTitle>
            {
              this.props.note.tags.split(' ').map(tag => {
                return <span key={tag} className="mr-1 badge badge-pill badge-primary">{tag}</span>;
              })
            }
            <hr />
            <CardText dangerouslySetInnerHTML={{__html: this.parseContent()}} ></CardText>
          </CardBody>
        </Card>
    );
  }

}
export default withRouter(Note);
