import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NoteGrid from './NoteGrid';
import ViewNote from './ViewNote';
import NewNote from './NewNote';
import EditNote from './EditNote';
import DeleteModal from './DeleteModal';
// import notes from '../dummydata';


const StyledMainPane = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.color.mainPaneBG};
  width: ${ props => props.theme.dimensions.main.width };
  border-style: solid;
  border-width: ${props => props.theme.dimensions.main.borderWidth};
  border-color: ${props => props.theme.color.border};

  h1 {
    font-size: ${ props => props.theme.dimensions.main.h1FontSize };
    font-family: ${props => props.theme.font.heading};
    color: ${props => props.theme.color.headingText};
  }
`;

export default class MainPane extends Component {
  render() {
    const { notes, fetchNotes } = this.props;
    return (
      <StyledMainPane>
        <Route path="/" exact render={ routeProps => <NoteGrid {...routeProps } notes={ notes } /> } />
        <Route path="/add/" render = { routeProps => <NewNote {...routeProps}  /> } />
        <Route path="/view/(delete/)?:id" render={ routeProps => <ViewNote {...routeProps} /> } />
        <Route path="/view/delete/:id/" render={ routeProps => <DeleteModal {...routeProps} fetchNotes={ fetchNotes } /> } />
        <Route path ="/edit/:id" render = { routeProps => <EditNote {...routeProps} /> } />
      </StyledMainPane>
    );
  }
}
