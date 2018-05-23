import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    return(
        <div className = "card-container">
            <h1 className = "card-container-header">Your notes:</h1>
            <Card className="card">
                <CardTitle className = "card-title"><Link to = "/list/number">in purus eu magna</Link></CardTitle>
            
                <CardText className = "card-body">"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque."</CardText>
            </Card>                    
        </div>
    )
}

export default Cards;