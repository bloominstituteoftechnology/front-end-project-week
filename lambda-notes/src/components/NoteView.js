import React,  { Component } from "react";
import {notes} from '../Notes/notes'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
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
<div>
    <Card>
    <CardBody>
<CardTitle>{this.state.note.title}</CardTitle>

<CardText>{this.state.note.textbody}</CardText>
</CardBody>
</Card>
</div>
    </React.Fragment>
        )
    }
}
export default NoteView;