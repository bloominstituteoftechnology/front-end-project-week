import React, { Component } from 'react';
import ListView from './ListView'
import CreateNote from './CreateNote'
import { Route, Redirect,Switch } from 'react-router-dom';
import ViewNoteContainer from './ViewNoteContainer'
import EditNoteContainer from './EditNoteContainer';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ContentDiv = styled.div`
  min-height:100vh;
`

class Content extends Component {
  render() {
    return (
      <ContentDiv>
        {/* Wrap the entire Transition Grop in another route to get the location */}
        <Route render ={({ location }) => (

        <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames='fade'>
        <Switch location={location}>  
          {/* Redirects */}
          <Route exact path="/" render={() => (<Redirect to='/view-notes' />)} /> 
          
          {/* List Notes View */}
          <Route exact path="/view-notes" render={(props) => <ListView {...props} notes={this.props.notes} />} /> 
          
          {/* Create Notes View */}
          <Route exact path="/create-note" render={(props) => <CreateNote {...props} saveNewNote={this.props.saveNewNote}/>} />
          
          {/* View Note */}
          <Route exact path="/view-note/:id" render={(props) => <ViewNoteContainer {...props} notes={this.props.notes} onDeleteLinkClick={this.props.onDeleteLinkClick} />} />
          
          {/* Edit Note */}
          <Route exact path="/edit-note/:id" render={(props) => <EditNoteContainer {...props} notes={this.props.notes} editNote={this.props.editNote}/>} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>

        )}/>
      </ContentDiv>
    );
  }
}

export default Content;