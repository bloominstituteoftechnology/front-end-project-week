import React from 'react';
import styled from 'styled-components' 
import {connect} from 'react-redux'
import { Card, CardText, CardBody, CardTitle, CardLink, CardDeck} from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import SingleNoteView from '../NoteAppViews/SingleNoteView'

const NoteContainer = styled.section `
 display: flex ;
 flex-direction: row ;
 flex-wrap: wrap ;
 margin: 5% 5% 5% 5%;
 justify-content: space-between ;
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
 width: 110px ;
 height: 90px ;
 overflow: hidden;
 text-overflow: ellipsis ;
 font-family: 'Courier New', Courier, monospace ;
 font-size: 0.8rem ;
`

const Note = props => {
 
 console.log(props.id)
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
         <Route path={`/note/${props.id}`} component={SingleNoteView}/>
        </CardTitle>
         <hr />
        <CardText>
         <NoteBody className="note_body">{props.textBody}</NoteBody>
        </CardText>
        <CardLink href="/edit/">Edit</CardLink>
       </CardBody>
      </Card>
     </CardDeck>
    </NoteStyling>
   </NoteContainer>
  </div>
 )
}

const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes 
 }
}

export default connect(mapStateToProps)(Note)
