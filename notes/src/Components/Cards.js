import React, { Component } from 'react';
import { 
    Card, CardImg, CardText, CardBody, 
    CardTitle, CardSubtitle, Button 
} from 'reactstrap';

const Cards = props => {
    return(
        <div className="myContainer">
            <Card className="myCards col-3 ">
                <CardBody className="myCardBody ">
                    <CardTitle className="myCardTitle 
                    text-left border-bottom font-weight-bold">Note Title</CardTitle>
                    <CardText className="myCardText text-left "> 
                        THIS IS WHAT I WANT TO ADD TO MY NOTE
                 

                    </CardText>
                    {/* <Button> DELETE? UPDATE? </Button> */}
                </CardBody>
            </Card>
        </div>
        
    );
};


export default Cards;
