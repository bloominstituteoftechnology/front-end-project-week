import React,  { Component } from "react";
import {notes} from '../Notes/notes'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row,Col,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
    import{ Link } from 'react-router-dom'
class NoteView extends Component{
constructor(props){
    super(props)
    this.state={
        note:[],
        modal:false
    };
    this.toggle = this.toggle.bind(this); 
}
   
    componentDidMount(){
        const { id } = this.props.match.params; 
       console.log(this.state)
        this.setState({note: notes[id]})
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

render(){
   
    console.log(this.props)
 
    return(
        
    <React.Fragment>


    <Card>
      <Row>  
<Col className="link-styles">
    <Link to={`/edit/${this.state.note.id}`} ><Button color="link" className="link editLink-styles" >edit</Button></Link>
  
<Button color="link" className="link deleteLink-styles" onClick={this.toggle} >delete</Button>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
       
       <ModalBody>
        Are you sure you want to delete this?
       </ModalBody>
       <ModalFooter>
         <Link to="/">
         <Button color="danger" className="button danger-styles modal-button" onClick={this.props.delete(this.state.note.id)}>Delete</Button>
         </Link>
         <Button color="secondary" className="button modal-button" onClick={this.toggle}>No</Button>
       </ModalFooter>
     </Modal>
</Col>
</Row>

<Row>
<Col>
    <CardBody>
<CardTitle className="title-styles">{this.state.note.title}</CardTitle>

<CardText  className="text-styles">{this.state.note.textbody}</CardText>
</CardBody>
</Col>
</Row>
</Card>

    </React.Fragment>
        )
    }
}
export default NoteView;