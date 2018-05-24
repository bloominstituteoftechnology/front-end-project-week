import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row , Col } from 'reactstrap';
  import{ Link } from 'react-router-dom'
 const Notes = props => {
    
    return(<React.Fragment>
<Row>
     {props.notes.map(note =>(
       <Col xs="4" >
       <Link to={`/notes/${note._id}`} className="card-styles">
         
        <Card className="card-styles" key={note._id}>
       <CardBody className="body-styles">
        <CardTitle>{note.title}</CardTitle>
        <CardText className="cardtext-styles">{note.textbody}</CardText>
        </CardBody>
        </Card>
        
        </Link>
          </Col> 
   ))}
   </Row>


  
     </React.Fragment>)
}
export default Notes