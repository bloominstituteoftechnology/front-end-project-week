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
        {console.log(this.props)}
                <Link to='/EditNote' className ='editnote' type= 'text' placeholder='edit' name='editNote'/>
                <Link to='/CreateNote' className ='deletenote' type= 'text' placeholder='delete' name='deleteNote'/>
        <Link to={`/Note/${this.props.note.title}`}>
            <Card body>
                        {console.log(this.props)}
                        <CardTitle> Title: {this.props.note.title}</CardTitle>
                        <CardText>Body: {this.props.note.body}</CardText>   
            </Card>
        </Link>
    </div>
    }
}
