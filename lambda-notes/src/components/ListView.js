import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-top: 50px;
`

const NoteCardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
`

const NoteCard = styled.div`
  background-color: white;
  border: 1px solid #979797;
  margin-right: 15px;
  margin-top: 20px;
  width: 190px;
  height: 200px;
  padding-top: 14px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
`

const CardTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid #979797;
  padding-bottom: 4px;
`

const CardTextBody = styled.div`
  font-family: 'Roboto', sans-serif;
  height:135px;
  line-height: 2.3rem;
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledLink = styled(Link)`
  text-decoration:none;
  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  color:black;
  &:hover{
    color:#2BC1C4
  }
`

class ListView extends Component {
  render() {
    return (
      <div>
        <Header>Your Notes</Header>
        <NoteCardContainer>  
          {this.props.notes.map ( note => 
            <StyledLink to={`view-note/${note.id}`} key={Math.random()}>
              <NoteCard>
                <CardTitle>{note.title}</CardTitle>
                <CardTextBody>{note.textBody}</CardTextBody>
              </NoteCard>
            </StyledLink>) }
        </NoteCardContainer>
      </div>
    );
  }
}

export default ListView;