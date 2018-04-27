import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { withRouter } from "react-router-dom";

class Note extends Component {

  handleClickNote = () => {
    this.props.updateClickedNote(this.props.note);
    this.props.history.push('/notes-view');
  }

  render() {
    return (
      // <div className="note-container">
        <Card onClick={this.handleClickNote}>
          <CardBody>
            <CardTitle>{this.props.note.title}</CardTitle>
            {
              this.props.note.tags.split(' ').map(tag => {
                return <span key={tag} className="mr-1 badge badge-pill badge-primary">{tag}</span>;
              })
            }
            <hr />
            <CardText>{this.props.note.content}</CardText>
          </CardBody>
        </Card>
      // </div>
    );
  }

}
export default withRouter(Note);
