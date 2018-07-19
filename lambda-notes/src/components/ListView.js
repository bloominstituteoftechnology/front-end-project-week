import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// CSS
import {borderColor, accentColorPrimary } from '../components/css/Globals'

const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  margin-top: 50px;
  margin-bottom: 20px;
`

const NoteCardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
`

const NoteCard = styled.div`
  background-color: white;
  border: 1px solid ${borderColor};
  margin: 10px 0;
  width: 190px;
  height: 200px;
  padding-top: 14px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
`

const CardTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid ${borderColor};
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
    color:${accentColorPrimary}
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
                <CardTitle>{(note.title.length > 13) ? note.title.substring(0,13)+" ..." : note.title}</CardTitle>
                <CardTextBody>{(note.textBody.length > 100) ? note.textBody.substring(0,125)+" ..." : note.textBody}</CardTextBody>
              </NoteCard>
            </StyledLink>) }
        </NoteCardContainer>
      </div>
    );
  }
}

export default ListView;