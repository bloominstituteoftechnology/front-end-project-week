import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Form, FormGroup, Label, Input, FormText, Container, Row, Col  } from 'reactstrap';
import Delete from '../components/Delete';
import EditNote from '../LambdaPages/EditNote';

const List = (props) => {
    return(
        <div>
            <Form>
            <FormGroup row>
              <Label for="Note Title" sm={2}></Label>
              <Col sm={10}>
                <Input type="text" name="note" id="title" placeholder="Note Title:" />
              </Col>
            </FormGroup>
             <FormGroup row>
              <Label for="exampleText" sm={2}></Label>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" placeholder="Note content" />
              </Col>
            </FormGroup>
            <Link to="/"><Button>Save</Button></Link>
            </Form>
        </div>
    )
}

export default List;