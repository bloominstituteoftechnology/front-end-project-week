import React, { Component } from 'react';
import { 
    Card, CardText, CardBody, 
    CardTitle, CardSubtitle, Button 
} from 'reactstrap';

const Cards = props => {
    console.log(props.notes);
    return(
        <div className="myContainer">
            {props.notes.map((note, index) => 

            <Card key={"MyNote" + index} className="myCards col-4 d-flex ">
                <CardBody className="myCardBody ">
                    <CardTitle className="myCardTitle 
                    text-left border-bottom font-weight-bold">
                        {note.title}
                    </CardTitle>
                    <CardText className="myCardText text-left "> 
                        {note.content}
                    </CardText>
                    {/* <Button> DELETE? UPDATE? </Button> */}
                </CardBody>
            </Card>
        )}
        </div>
        
    );
};


export default Cards;
