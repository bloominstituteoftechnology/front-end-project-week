import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class Note extends Component {
    constructor(props) {
        super(props);
        // this.state = {
            
        // };
    }
    render(){
    return <div>
        {console.log("this test is " + this.props)}
        <Card body>
                    <CardTitle> Title: {this.props.note.title}</CardTitle>
                    <CardText>Body: {this.props.note.body}</CardText>   
        </Card>
    </div>
    }
}
