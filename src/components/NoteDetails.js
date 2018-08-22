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
      .get(`https://back-end-project-week-lambda.herokuapp.com/${noteId}`)
      .then(response => {
        this.setState({ details: response.data[0] }, () => {
          console.log(this.state.details.title);
        });
      })
      .catch(err => console.log(err));
  }

  onDelete = () => {
    let noteId = this.state.details._id;

    axios
      .delete(`http://localhost:3300/${noteId}`)
      .then(response => {
        this.props.history.push("/");
        console.log(noteId);
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
