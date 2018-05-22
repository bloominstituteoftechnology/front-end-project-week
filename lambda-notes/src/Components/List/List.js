import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';
import { Link } from 'react-router-dom'
import { dummydata } from '../../dummydata/dummydata';
import NoteView from '../NoteView/NoteView';
import { Card, CardTitle, CardText } from 'reactstrap';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummydata : [],
          };
    }

    
    render() { 
        return (
            <div className = "list-wrapper">
                <Sidebar />
                
                <div className = "card-container">
                    <h1 className = "card-container-header">Your notes:</h1>
                    <Card className="card">
                        <CardTitle className = "card-title"><Link to = "/list/number">in purus eu magna</Link></CardTitle>
                    
                        <CardText className = "card-body">"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque."</CardText>
                    </Card>  
                    
                    <Card className="card">
                        <CardTitle className = "card-title"><Link to = "/list/number">volutpat dui maecenas tristique est</Link></CardTitle>
                    
                        <CardText className = "card-body">"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."</CardText>
                    </Card>

                    
                                    
                </div>
                
            </div>
          )
    }
    
}


 
export default List;
