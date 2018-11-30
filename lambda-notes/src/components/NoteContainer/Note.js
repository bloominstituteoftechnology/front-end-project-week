import React from 'react';
import styled from 'styled-components' 
import { Card, CardText, CardBody, CardTitle, CardLink} from 'reactstrap';
import { Link } from 'react-router-dom'

const NoteContainer = styled.section `
  display: flex ;
  flex-direction: row ;
  flex-wrap: wrap ;
`
const NoteStyling = styled.div ` 
 border: 1px solid black ;
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
 width: 150px ;
 height: 100px ;
 overflow: hidden;
 text-overflow: ellipsis ;
 font-family: 'Courier New', Courier, monospace ;
 font-size: 0.8rem ;
`

const Note = props => {
 const id = props.id
 console.log(props.index)
 console.log("this is ID: ", id)
  return (
    <div>
     <NoteContainer>
      <NoteStyling>
       <Card>
        <CardBody>
        <CardTitle>
          <Link to={`note/${id}`}><NoteTitle>{props.title}</NoteTitle></Link>
          </CardTitle>
          <hr />
          <CardText>
           <NoteBody className="note_body">{props.textBody}</NoteBody>
          </CardText>
          <CardLink href="/edit/">Edit</CardLink>
        </CardBody>
       </Card>
      </NoteStyling>
     </NoteContainer>
    </div>
  )
}

export default Note
