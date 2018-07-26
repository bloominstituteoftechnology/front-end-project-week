import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, CardTitle, CardBody } from "reactstrap";

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentWillMount() {
    this.getNote();
  }

  getNote() {
    let noteId = this.props.match.params.id;
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
      .then(response => {
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  onDelete = () => {
    let noteId = this.state.details._id;

    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <Card body>
          <CardTitle>{this.state.details.title}</CardTitle>
          <hr />
          <CardBody>{this.state.details.textBody}</CardBody>
        </Card>
        <div>
          <Link to={`/note/edit/${this.state.details._id}`}>
            <Button color="info"> EDIT </Button>
          </Link>
          <Button onClick={this.onDelete} color="danger">
            DELETE
          </Button>
        </div>
      </div>
    );
  }
}

export default NoteDetails;
