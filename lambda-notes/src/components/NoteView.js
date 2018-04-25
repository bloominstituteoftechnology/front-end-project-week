import React,  { Component } from "react";
import {notes} from '../Notes/notes'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row,Col } from 'reactstrap';
class NoteView extends Component{
constructor(props){
    super(props)
    this.state={
        note:[]
    } 
}
   
    componentDidMount(){
        const { id } = this.props.match.params; 
       console.log(this.state)
        this.setState({note:notes[id]})
    }

render(){
   
    console.log(this.props.notes)
 
    return(
        
    <React.Fragment>


    <Card>
      <Row>  
<Col className="link-styles">
    <Button color="link" className="link">edit</Button>
<Button color="link" className="link">delete</Button>
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