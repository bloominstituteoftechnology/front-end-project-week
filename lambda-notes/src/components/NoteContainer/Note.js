import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { NoteTitle, NoteBody } from './styled-components/NoteStyledComponents'

const Note = props => {
 
 return (
  <div> 
   <Link to={`/note/${props.id}`} style={{ textDecoration: 'none', color: 'black' }} >
    <Card>
     <CardBody>
      <CardTitle>
       <NoteTitle>{props.title}</NoteTitle>
       </CardTitle>
       <hr />
       <CardText>
       <NoteBody className="note_body">{props.body}</NoteBody>
       </CardText>
      </CardBody>
     </Card>
   </Link>
  </div>
 )
}

export default withRouter(Note)