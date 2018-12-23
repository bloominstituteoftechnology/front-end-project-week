import React, { Component } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import SideBarView from './SideBarView';
import ListView from '../views/ListView';
import NewNoteView from './NewNoteView';
import SingleNoteView from './SingleNoteView';
import LoggedOutView from './LoggedOutView';
import EditNoteView from './EditNoteView';
import RegisterAndLoginView from '../views/RegisterAndLoginView';
import DeleteModal from '../components/DeleteModal';
import styled from 'styled-components';
import { withRouter, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

//Test Deploy Comment
const AppContainer = styled.div`
  background: #d7d7d7;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: flex-start;
  color: black;
  width: 100%;
  max-width: 1200px;
  border: 1px solid gray;
  margin: 0 auto;
  font-size: 1.4rem;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        {this.props.mightDelete ? <DeleteModal /> : null}
        <div className="App">
          <AppContainer>
            <Route path="/" render={props => <SideBarView {...props} />} />

            <Route exact path="/front-end-project-week" render={props => <ListView {...props} />} />

            <Route exact path="/front-end-project-week/new-note" render={props => <NewNoteView {...props} />} />

            <Route exact path="/front-end-project-week/edit-note" render={props => <EditNoteView {...props} />} />

            {this.props.activeNote && !this.props.editingNote ? <SingleNoteView /> : null}

            <Route exact path="/front-end-project-week/loggedOut" render={props => <LoggedOutView {...props} />} />
          </AppContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
    isActive: state.isActive,
    editingNote: state.editingNote,
    mightDelete: state.mightDelete
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
