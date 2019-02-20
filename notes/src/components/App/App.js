import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

import * as ROUTES from "../../constants/routes";

import About from "../About";
import Notes from "../NoteComponents/Notes";
import Note from "../NoteComponents/Note";
import NewForm from "../Forms/NewForm";
import EditForm from "../Forms/EditForm";
import TopBar from "../Navigation";

import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgb(234, 237, 232);
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <div className="App">
          <TopBar />
          <Container>
            {/* <Route path={ROUTES.LANDING} exact component={LandingPage} /> */}
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
            {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
            {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
            <Route path={ROUTES.HOME} render={props => <Notes {...props} />} />
            <Route
              exact
              path={ROUTES.NOTE}
              render={props => <Note {...props} />}
            />
            <Route
              path={ROUTES.NEW_NOTE}
              render={props => <NewForm {...props} />}
            />
            <Route
              path={ROUTES.EDIT_NOTE}
              render={props => <EditForm {...props} />}
            />
            <Route path={ROUTES.ABOUT} component={About} />
          </Container>
        </div>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);
