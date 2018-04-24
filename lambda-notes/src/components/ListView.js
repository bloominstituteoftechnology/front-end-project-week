import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import{ Link } from 'react-router-dom'
 const Notes = props => {
    console.log("porps", props);
    
    return(<React.Fragment>
     
      <div className="notesHeader-styles">
       <div className="notesText-styles">Your Notes:</div>
       </div><div className="cardsContainer-styles">
     {props.notes.map(note =>(
       <Link to={`/note/${note.id}`} className="card-styles">
        <Card className="card-styles">
       <CardBody className="body-styles">
        <CardTitle>{note.title}</CardTitle>
        <CardText className="cardtext-styles">{note.textbody}</CardText>
        </CardBody>
        </Card>
        </Link>
   ))}
   </div>


  
     </React.Fragment>)
}
export default Notes