import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';


//Class Component that will render NoteForm and its props
// class EditNote extends Component {
//   constructor(props){
//     super(props);
//     console.log(props)
//     this.state = {
//       note: this.props.note,
//       title: this.props.title
//     };
//   }


//   //method will handle the UI
//   updateInput = (event) => {
//     this.setState({[event.target.name]: event.target.value});
//   }
  
//   //this method will update the note by matching the params
//   upDateNote = () => {
//     const updateNote = { note: this.state.note, title: this.state.title}

//     this.props.notes.title = updateNote.title;
//     this.props.notes.note  = updateNote.note

//     this.setState({
//       title: this.props.notes.title,
//       note: this.props.notes.note
//     })
//   }

  

//   render() {
//     console.log("Render STATE", this.state);
//     return (
//       <Container className="container">
//         <Row md="3">
//           <Col>
//             <Form>
//               <FormGroup>
//                 <Label>Create Note:</Label>
//                 <Input 
//                   type="text" 
//                   name="title" 
//                   placeholder="Note Title" 
//                   value={this.state.title}
//                   onChange={this.updateInput}/>
//               </FormGroup>
//                 <Input 
//                   type="textarea" 
//                   name="note"  
//                   placeholder="Note Content" 
//                   value={this.state.note}
//                   onChange={this.updateInput} />
//                   <Link to="/"> <Button onClick={() => this.props.editNote(this.state.title, this.state.note)} color="info">Save</Button></Link>      
//                 </Form>
//             </Col>
//           </Row>
//       </Container>
//     );
//   }
// }

const EditNote = () => {
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
};

export default EditNote;

