import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {
    Form,
    Input,
    Button,
    FormGroup,
    Col,
    Container,
    Row
  } from "reactstrap";
  import NavBar from './NavBar';

class EditNote extends Component {
  constructor() {
    super();
  this.state = {
    note: {},
    title: '',
    content: '',
    }
  }
  componentWillMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:5000/api/notes/${id}`)
    .then(response => {
      this.setState(() => ({ note: response.data }))
      console.log(this.state.note)
    })
  };

  editNote = e => {
    e.preventDefault();
    const  id  = this.props.match.params.id
    axios.put(`http://localhost:5000/api/notes/${id}`, {
      title: this.state.title,
      content: this.state.content
    })
    .then(response => {
      
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render(){
    
    return (
        <Container className="mainContainer" style={{ display: "flex" }}>
        <Col sm="3" className="navCol">
          <NavBar className="navBar" />
        </Col>

        <Col sm="9" className="notesContainer">
          <Form style={{ padding: "20px", marginTop: "35px" }}>
            <h3>Edit Note:</h3>
            <FormGroup style={{ marginTop: "35px" }}>
              <Input style={{ paddingTop: "10px", paddingLeft: "20px", width: "60%"}}
                type="text"
                name="title"
                placeholder="Note Title"
               onChange={this.handleChange}
               value={this.state.title}
              />
              <br />
              <Input
                style={{ paddingBottom: "400px", paddingTop: "20px", paddingLeft: "20px" }}
                type="textarea"
                name="content"
                placeholder="Note"
                onChange={this.handleChange}
                value={this.state.content}
              />
              <br />
              {/* <Link  to={`/note/${this.state.note._id}`}> */}
                <Button
                onClick={this.editNote}
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: "#2BC1C4",
                    color: "#FFFFFF",
                    width: "200px",
                    borderRadius: "0",
                    padding: "8px"
                  }}
                >
                  Update
                </Button>
              {/* </Link> */}
            </FormGroup>
          </Form>
        </Col>
      </Container>
    )
  }
}
 
export default EditNote;