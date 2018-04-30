import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import NoteCard from './NoteCard';
// import {notesdata} from './App';

// this holds the edit and delete buttons 
export default class Note extends Component {
    constructor(props) {
        super(props);
    }
    render(){
    return <div className='notecard'>
     {console.log('this is from note')}
        {console.log(this.props)}
            <Card body>
                        {/* <Link to='/CreateNote' className ='deletenote' type= 'text' placeholder='delete' name='deleteNote'/> */}
                        {/* {console.log("I have been pushed")}
                        {console.log(this.props)} */}
                        <CardTitle> Title: {this.props.note.title}</CardTitle>
                        <p><CardText>Body:  {this.props.note.body}</CardText> </p> 
                        
            </Card>
    </div>
    }
}
