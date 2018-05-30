import React from "react";
import { Card,  CardText, CardBody,
  CardTitle,   Row , Col } from 'reactstrap';
  import{ Link } from 'react-router-dom'

 const Notes = props => {
    
    return(<React.Fragment>
<Row>
     {props.notes.map(note =>(
       <Col key={note._id}  sm={{size:12,style:{color:"blue"}}} md="6" lg="6" xl="4" >
       <Link to={`/notes/${note._id}`} className="card-styles" style={{ textDecoration: 'none' }} >
         
        <Card className="card-style list-styles" key={note._id}>
       <CardBody className="body-styles">
        <CardTitle>{    props.titleTrim(note.title)     }</CardTitle>
        <CardText className="cardtext-styles">{ props.trimmer(note.textbody) }</CardText>
        </CardBody>
        </Card>
        
        </Link>
          </Col> 
   ))}
   </Row>


  
     </React.Fragment>)
}
export default Notes