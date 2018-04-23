import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

 const Notes = props => {
    console.log("porps", props);
    
    return(<React.Fragment>
     {props.notes.map(note =>(
       <div>
        <Card>
       <CardBody>
        <CardTitle>{note.title}</CardTitle>
        <CardText>{note.textbody}</CardText>
        </CardBody>
        </Card>
        </div>
   ))}
     </React.Fragment>)
}
export default Notes