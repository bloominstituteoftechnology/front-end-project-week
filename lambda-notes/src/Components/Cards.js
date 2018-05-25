import React, { Component } from 'react';
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
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

                        <Card key={item.id} className='Card'>
                            <Link to={`note/${item.id}`} style={{color:'black'}}>
                                <CardTitle>{item.title}</CardTitle>
                                <div className='Line'></div>
                                <CardText>{ (item.content.length>110) ? <div>{item.content.substring(0,110)}...</div> : <div>{item.content}</div>}
                                </CardText>
                            </Link>
                        </Card>

                )
            })}</div>
        );
    }
}

export default Cards;