import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className = "list-wrapper">
                <Sidebar />
                <div className = "card-container">
                    <h1 className = "card-container-header">Your notes:</h1>
                    <Card className="card">
                        <CardTitle className = "card-title"><Link to = "/list/number">Special Title Treatment</Link></CardTitle>
                    
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className = "card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className = "card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className = "card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className = "card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                    <Card className="card">
                        <CardTitle className = "card-title">Special Title Treatment</CardTitle>
                        <CardText className = "card-body">With supporting text below as a natural lead-in to additional content.</CardText>
                    </Card>
                </div>
                
            </div>
          )
    }
}
 
export default List;
