
import React from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import axios from 'axios';
import DeleteModal from "./DeleteModal";
import "./Note.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes:[],
      note: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.notes !== this.props.notes) {
      this.setState({
        notes: this.props.notes
      });
    }
  }
  
  getNote = () => {
    const { id } = this.props.match.params;
    axios
    .get(`http://localhost:2200/api/notes/${id}`)
    .then((note) => {
      this.setState({ note: note.data[0] });
    })
  }

  componentDidMount() {
    this.getNote();  
  }

  render() {
    console.log(this.state.note);
    // const id = this.props.match.params.id;
    // const note = this.state.notes.find(note => {
    //   console.log('typeof note.id', typeof note.id);
    //   return note.id === Number(id);
    // });
    // // console.log(typeof this.state.notes[0].id);
    // console.log('note.js id',id,'note',note);
    // if (!note) return (<div>Loading...</div>);

    // const { title, content} = note;
    return (
      <Container className="note">
        <Row noGutters>
          <Col xs="10"> </Col>{" "}
          <Col xs="1">
            <Link
              style={{
                color: "black"
              }}
              to={`/notes/${this.state.note.id}/edit`}
            >
              {" "}
              <i className="fas fa-edit"> </i>
            </Link>
          </Col>{" "}
          <Col xs="1">
            <DeleteModal
              note= {this.state.note}
              deleteNote={this.props.deleteNote}
            />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col>
            <h2> {this.state.note.title} </h2>{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col>
            <p> {this.state.note.content} </p>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>
    );
  }
//  getNote = (id) => {
//   axios
//   .get(`http://localhost:2200/api/notes/${id}`)
//   .then(response => {
//     this.setState({ notes: response.data });
//   })
//   .catch(error => {
//     console.error("Server Error", error);
//   });
//  }
}



export default Note;



