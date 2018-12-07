import React from 'react';
import styled from 'styled-components' 
import { Card, CardText, CardBody, CardTitle, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom'
import SingleNoteView from '../NoteAppViews/SingleNoteView'

const NoteContainer = styled.section `
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
 margin: 5% 5% 5% 5%;
 justify-content: space-between ;
`
const NoteStyling = styled.div ` 
`

const NoteTitle = styled.div `
 font-size: 1rem ;
 font-family: 'Archivo Black';
 overflow: hidden;
 text-overflow: ellipsis;
 max-width: 100px ;
 width: 100%
`
const NoteBody = styled.article ` 
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
   <NoteContainer>
    <NoteStyling>
     <CardDeck>
      <Card  style={{ backgroundColor: '#f9fbff', borderColor: '#333' }} >
       <CardBody>
        <CardTitle>
         <Link to={`/note/${props.id}`} 
         style={{ textDecoration: 'none', color: 'black' }} >
         <NoteTitle>{props.title}</NoteTitle>
         </Link>
         </CardTitle>
         <hr />
         <CardText>
         <NoteBody className="note_body">{props.textBody}</NoteBody>
        </CardText>
        <Link to={`/edit/${props.id}`}>Edit</Link>
       </CardBody>
      </Card>
     </CardDeck>
    </NoteStyling>
   </NoteContainer>
  </div>
 )
}

export default Note