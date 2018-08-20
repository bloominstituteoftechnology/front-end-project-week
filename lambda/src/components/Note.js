import React from "react";
import styled from 'styled-components';


const NoteCard = styled.div`
`
const Card = styled.div`
`
const Title = styled.div`
`
const Content = styled.div`
`
const H2= styled.h2`
`
const P = styled.p`
`


const Note = props => {
  return (
    <NoteCard>
      {props.note.map((item) => {
          return(
        <div key={item.id}>
          <Card>
            <Title><H2>{item.title}</H2></Title>
            <Content><P>{item.content}</P></Content>
          </Card>
        </div>
          )
      })}
    </NoteCard>
  );
};

export default Note;