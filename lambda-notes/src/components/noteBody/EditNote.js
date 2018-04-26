// //IMPORTS
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Row, Col, Button } from 'reactstrap';

class UpdateNote extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    }
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
        <h3>Edit Note:</h3><br />
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
                <Button onClick={this.handleSubmit} className="btn-info">Update</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }

}

export default withRouter(UpdateNote);



// import React, { Component } from 'react';
// import { Form, FormGroup, Input } from 'reactstrap';
// import {Link} from 'react-router-dom';

// //EDIT NOTE COMPONENT
// class EditNote extends Component {
//     render() {
//         return(
//             <div className='body'>
//                 <h1 className='sub_header'>Edit Note:</h1>
//                 <Form>
//                     <FormGroup>
//                         <Input type='text' className='noteTitle mt-4' name='editTitle' id='editTitle' placeholder='Note Title' />
//                     </FormGroup>
//                     <FormGroup>
//                         <Input type='textarea' className='noteContent' name='editBody' id='editBody' placeholder='Note Content' />
//                     </FormGroup>
//                     <FormGroup>
//                         <Link className='' to='/'>
//                         <button className='navButton_save mt-2'>Update</button>
//                         </Link>
//                     </FormGroup>
//                 </Form>
//             </div>    
//         )
//     }
// }

// export default EditNote;