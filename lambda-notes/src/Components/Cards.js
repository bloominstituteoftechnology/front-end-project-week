import React, { Component } from 'react';
import { Card, CardTitle, CardText } from "reactstrap";
import './Components.css'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='Cards'>{this.props.notesFromState.map( (item, index)=> {
                return (
                    <Card  className='Card'>
                        <CardTitle>{item.title}</CardTitle>
                        <div className='Line'></div>
                        <CardText>{item.content}</CardText>
                    </Card>
                )
            })}</div>
        );
    }
}

export default Cards;