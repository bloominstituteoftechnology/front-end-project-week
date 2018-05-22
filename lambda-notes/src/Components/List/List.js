import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import DummyData from '../DummyData';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DummyData: [],
          }
    }

    
    render() { 
        return (
            <div className = "list-wrapper">
                <Sidebar />
                
                <div className = "card-container">
                    <h1 className = "card-container-header">Your notes:</h1><FakeData />

                    
                    
                    
                </div>
                
            </div>
          )
    }
    
}
const FakeData = (props) => {
    return(
        //map here over cards from DummyData.js
        <Card className="card">
            <CardTitle className = "card-title"><Link to = "/list/number">{DummyData.note_title}</Link></CardTitle>
        
            <CardText className = "card-body">{DummyData.note_body}</CardText>
        </Card>

    
    
    )
}

 
export default List;
