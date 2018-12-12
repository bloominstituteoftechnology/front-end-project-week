import React, { Component } from 'react';
import Register from '../components/Register';
import SideBarView from './SideBarView';
import ListView from './ListView';
import NewNoteView from './NewNoteView';
import SingleNoteView from './SingleNoteView';
import EditNoteView from './EditNoteView';
import DeleteModal from '../components/DeleteModal';
import styled from 'styled-components';
import { withRouter, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

const AppContainer = styled.div`
  background: #d7d7d7;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
  max-width: 2000px;
  border: 1px solid gray;
  margin: 0 auto;
  font-size: 62.5%;
  box-sizing: border-box;
`;

class App extends Component {
  render() {
    console.log('trying to find the id', this.props);
    return (
      <div>
        {this.props.mightDelete ? <DeleteModal /> : null}
        <div className="App">
          <AppContainer>
            <div className="Testing Registration & Login">
              <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </nav>
              <section>
                <Switch>
                  <Route path="/register" component={Register} />
                  {/* <Route path="/login" component={Login} />
            <Route path="/" render={() => {
              return (
                <React.Fragment>
                <h2>Users</h2>
                  <ol>
                    {this.state.users.map(user => <li key={user.id}>{user.username}</li>)}
                  </ol>
                </React.Fragment>
              );
            }} /> */}
                </Switch>
              </section>
            </div>

            <Route path="/front-end-project-week" render={props => <SideBarView {...props} />} />
            <Route exact path="/front-end-project-week" render={props => <ListView {...props} />} />
            <Route exact path="/front-end-project-week/new-note" render={props => <NewNoteView {...props} />} />

            <Route exact path="/front-end-project-week/edit-note" render={props => <EditNoteView {...props} />} />

            {this.props.activeNote && !this.props.editingNote ? <SingleNoteView /> : null}
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
