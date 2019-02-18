import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SingleNote from "./components/SingleNote";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { checkAuth } from "./actions/index";

// something styled - need flex for sidebar and notes
const MainDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 5px auto;
  -webkit-box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.52);
  box-shadow: 10px 10px 13px 0px rgba(0, 0, 0, 0.52);
`;

const SideBar = styled.div`
  width: 25%;
  min-height: 95vh;
  background-color: silver;
  padding: 15px;
  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const DisplayDiv = styled.div`
  width: 75%;
  background-color: whitesmoke;
`;

const Button = styled.div`
  width: 95%;
  height: 50px;
  margin: 20px auto 15px;
  background-color: darkcyan;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;

class App extends Component {
  sendToForm = () => {
    this.props.history.push(`/form`);
  };

  sendToHome = () => {
    this.props.history.push(`/`);
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        Authorization: token
      }
    };
    this.props.checkAuth(reqOptions)
  }

  render() {
    return (
      <div>
        {this.props.signedOut ? (
          <div>
            <Route exact path="/" render={props => <SignIn {...props} />} />
            <Route
              exact
              path="/signup"
              render={props => <SignUp {...props} />}
            />
          </div>
        ) : (
          <MainDiv>
            <SideBar>
              <h1>Notable</h1>
              <Button onClick={this.sendToHome}>View Your Notes</Button>
              <Button onClick={this.sendToForm}>+ Create a New Note</Button>
            </SideBar>
            <DisplayDiv>
              <Route exact path="/" render={props => <NoteList {...props} />} />
              <Route
                path="/form"
                render={props => (
                  <NoteForm
                    {...props}
                    purpose="Create New Note:"
                    buttonText="Save"
                  />
                )}
              />
              <Route
                path="/note/:id"
                render={props => <SingleNote {...props} />}
              />
              <Route
                path="/update/:id"
                render={props => (
                  <NoteForm
                    {...props}
                    purpose="Edit Note:"
                    buttonText="Update"
                  />
                )}
              />
            </DisplayDiv>
          </MainDiv>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signedOut: state.signedOut
  };
};

export default connect(
  mapStateToProps,
  { checkAuth }
)(App);
