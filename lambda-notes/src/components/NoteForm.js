import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'reactstrap';

class NoteForm extends Component {

  render() {
    return (
      <div>
        <div className="container note-form">
            <Row>
              <Col className="col-4 mb-3">
                <br /><br />
                <h3>{`${this.props.formHeading}:`}</h3><br />
                <Input onChange={this.props.handleInputChange} type="text" name="title" value={this.props.title} placeholder="Note Title" />
              </Col>
            </Row>
            <Row>
              <Col className="col-10 mb-3">
                <Input onChange={this.props.handleInputChange} type="textarea" name="content" value={this.props.content} placeholder="Note Content" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this.props.handleSubmit} className="btn-info">Save</Button>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default NoteForm;
