import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NoteGrid from './NoteGrid';
import ViewNote from './ViewNote';
import NewNote from './NewNote'
import EditNote from './EditNote'
import notes from '../dummydata';


const StyledMainPane = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.color.mainPaneBG};
  width: ${ props => props.theme.dimensions.main.width };

  h1 {
    font-size: ${ props => props.theme.dimensions.main.h1FontSize };
    font-family: ${props => props.theme.font.heading};
    color: ${props => props.theme.color.headingText};
  }
`;

export default class MainPane extends Component {
  render() {
    return (
      <StyledMainPane>
        <Route path="/" exact render={ routeProps => <NoteGrid {...routeProps} notes={notes} /> } />
        <Route path="/add/" render = { routeProps => <NewNote {...routeProps} notes={[]} /> } />
        <Route path="/view/:id" render={ routeProps => <ViewNote {...routeProps} notes={notes} /> } />
        <Route path ="/edit/:id" render = { routeProps => <EditNote {...routeProps} notes={notes} /> } />
      </StyledMainPane>
    )
  }
}
