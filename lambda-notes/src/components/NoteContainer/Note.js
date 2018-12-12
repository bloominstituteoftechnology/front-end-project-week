import React from 'react';
import styled from 'styled-components' 
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


const NoteTitle = styled.div `
 font-size: 1rem ;
 font-family: 'Archivo Black';
 overflow: hidden;
 text-overflow: ellipsis;
 max-width: 100px ;
 width: 100%
`
const NoteBody = styled.span ` 
 width: 110px ;
 height: 90px ;
 overflow: hidden;
 text-overflow: ellipsis ;
 font-family: 'Courier New', Courier, monospace ;
 font-size: 0.8rem ;
`

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
       <NoteBody className="note_body">{props.textBody}</NoteBody>
       </CardText>
      </CardBody>
     </Card>
   </Link>
  </div>
 )
}

export default withRouter(Note)