import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../components/ButtonContainer';
import Register from '../components/Register';
import Login from '../components/Login';

import { withRouter, Switch, Route, NavLink } from 'react-router-dom';

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 25%;
`;

const SideBarTitleContainer = styled.div`
  font-size: 2.4rem;
  line-height: 1;
  padding-left: 5%;
`;

const Title = styled.h1`
  /* border: solid forestgreen; */
`;

const SideBarView = props => {
  return (
    <SideBarContainer>
      <SideBarTitleContainer>
        <Title>Lambda Notes</Title>
        <div className="Testing Registration & Login">
          <nav>
            <NavLink to="/front-end-project-week">Home</NavLink>
            <NavLink to="/front-end-project-week/login">Login</NavLink>
            <NavLink to="/front-end-project-week/register">Register</NavLink>
          </nav>
          <section>
            <Switch>
              <Route exact path="/front-end-project-week/register" component={Register} />
              <Route path="/front-end-project-week/login" component={Login} />
              {/* <Route
                        path="/loggedin"
                        render={() => {
                          return (
                            <React.Fragment>
                              <h2>Users</h2>
                              <ol>
                                {this.state.users.map(user => (
                                  <li key={user.id}>{user.username}</li>
                                ))}
                              </ol>
                            </React.Fragment>
                          );
                        }}
                      /> */}
            </Switch>
          </section>
        </div>
      </SideBarTitleContainer>
      <ButtonContainer />
    </SideBarContainer>
  );
};

export default SideBarView;
