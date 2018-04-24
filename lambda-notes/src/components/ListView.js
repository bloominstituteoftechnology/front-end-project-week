import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

 const Notes = props => {
    console.log("porps", props);
    
    return(<React.Fragment>
     
      <div className="p">
       <h6>Your Notes:</h6>
       </div>
     {props.notes.map(note =>(
       <div className="card-styles">
        <Card className="x">
       <CardBody className="y">
        <CardTitle>{note.title}</CardTitle>
        <CardText className="cardtext-styles">{note.textbody}</CardText>
        </CardBody>
        </Card>
        </div>
   ))}


  
     </React.Fragment>)
}
export default Notes