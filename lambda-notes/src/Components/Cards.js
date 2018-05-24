import React, { Component } from 'react';
import { Card, CardTitle, CardText } from "reactstrap";
import './Components.css'
import { Link } from "react-router-dom";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='Cards'>{this.props.notesFromState.map( (item, index)=> {
                return (
                    <Link to={`note${item.id}`} className='Card'>
                    <Card key={item.id}  >
                        <CardTitle>{item.title}</CardTitle>
                        <div className='Line'></div>
                        <CardText>{item.content}</CardText>
                    </Card>
                    </Link>
                )
            })}</div>
        );
    }
}

export default Cards;