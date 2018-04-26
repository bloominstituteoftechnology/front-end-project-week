import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { 
    Card, CardText, CardBody, 
    CardTitle 
    // CardSubtitle, Button 
} from 'reactstrap';

const Cards = props => {
    console.log("CARD PROPS", props)
    return(
        
        <div>
            <h4 className='Input_header text-left pl-3 pt-5 '> Your Notes: </h4>
            <div className="myContainer d-flex flex-wrap justify-content-around p-2 mr-3">
                {props.notes.map((note, index) => {
                return (
                    
                    <Card key={"MyNote" + index} 
                        className="myCards d-flex flex-row mt-3">
                          <Link to={`/ViewNote/${note.id}`} className="Link">CLICK HERE</Link>
                        <CardBody className="myCardBody">
                            <CardTitle className="myCardTitle pb-2 text-left border-bottom border-dark font-weight-bold">
                                {note.title} </CardTitle>
                            <CardText className="myCardText text-left "> 
                                {note.content} </CardText>                            
                        </CardBody>
                    </Card>
                    
                )})}
            </div>
        </div>
    );
};


export default Cards;
