import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Form, Input, Row, Col, Button } from 'reactstrap';

class UpdateNote extends Component {
  state = {
      title: '',
      content: ''
    }
  

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value}); 
  }

  handleSubmit = () => {
    this.props.updateNote(this.state);
  }

  render() {
    return (
      <div>
        <br /><br />
        <h3 className='h3-notename'>Edit Note:</h3><br />
        <div className="create-note">
          <Form>
            <Row>
              <Col className="col-8 mb-3">
                <Input onChange={this.handleInputChange} type="text" name="title" value={this.state.title} placeholder="Note Title" />
              </Col>
            </Row>
            <Row>
              <Col className="col mb-3">
                <Input onChange={this.handleInputChange} type="textarea" name="content" value={this.state.content} placeholder="Note Content" />
              </Col>
            </Row>
            <Row>
              <Col>
              <Link to='/' onClick={() => this.handleSubmit()}>
                <Button className="btn-info">Submit</Button>
              </Link>  
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }

}

export default withRouter(UpdateNote);



