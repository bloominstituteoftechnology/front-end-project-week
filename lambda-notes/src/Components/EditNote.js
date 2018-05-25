import React from 'react';
import { Link } from 'react-router-dom';
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

const EditNote = () => {
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
               
              />
              <br />
              <Input
                style={{ paddingBottom: "400px", paddingTop: "20px", paddingLeft: "20px" }}
                type="textarea"
                name="content"
                placeholder="Note Content"
                
              />
              <br />
              <Link to="/Note">
                <Button
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
              </Link>
            </FormGroup>
          </Form>
        </Col>
      </Container>
    )
}
 
export default EditNote;