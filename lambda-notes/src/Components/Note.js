import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import {notesdata} from './App';

// this holds the edit and delete buttons 
export default class Note extends Component {
    constructor(props) {
        super(props);
        // this.state = {
            
        // };
    }
    
    render(){
    return <div>
        tis is adsfads a teste
        {console.log(this.props.note)}
                <Link to='/EditNote' className ='editnote' type= 'text' placeholder='edit' name='editNote'/>
                <Link to='/CreateNote' className ='deletenote' type= 'text' placeholder='delete' name='deleteNote'/>
        
            <Card body>
                        {console.log(this.props.note)}
                        <CardTitle> Title: I should be a title {this.props.note.title}</CardTitle>
                        <CardText>Body: {this.props.note.body}</CardText>   
            </Card>
        
    </div>
    }
}
