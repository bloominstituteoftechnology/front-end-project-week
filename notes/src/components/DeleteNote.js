import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const StyledContainer = styled.div`
  background-color: hsla(0, 0%, 89%, 0.9);
  position: absolute;
  z-index: 5;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 160px;
`;

const ModalBox = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  height: 160px;
  border: 3px solid #d1d0d1;
  border-radius: 3px;
  padding: 10px;
  margin: 0 auto;
  justify-content: center;
  width: 500px;
  align-items: center;
`;

const StyledButtons = styled.div`
  ${"" /* background-color: #5eb3bb; */} height: 40px;
  ${"" /* margin-top: -50px; */} display: flex;
  justify-content: space-between;
  color: white;
  font-weight: bold;
  border-radius: 2px;
  width: 360px;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    color: white;
  }
  .red {
    background-color: red;
    margin-right: 10px;
  }
`;

const TextWrapper = styled.div`
  justify-content: center;
  display: flex;
  h3 {
    font-size: 16px;

    padding-top: 30px;
  }
`;

const Button = styled.div`
  background-color: #5eb3bb;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  align-items: center;
  border-radius: 2px;
  width: 190px;
  :hover {
    cursor: pointer;
  }
`;
class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   Redirect: false
    };
  }
 //props.history.push end of delete
 
//   toggleRedirect = () => {
//     this.setState({
//       Redirect: !this.state.Redirect
//     });
//   };
  render() {
    return (
      <StyledContainer>
     
        <ModalBox>
          <TextWrapper>
            <h3>Are you sure you want to delete this?</h3>
          </TextWrapper>
          <StyledButtons>
            <Button
              onClick={() => {
                this.props.deleteNote(this.props.match.params.id, this.props.history.push);
               
              }}
              className="red">
              Delete
            </Button>
            <Button onClick={this.props.history.goBack}>No</Button>
          </StyledButtons>
        </ModalBox>
      </StyledContainer>
    );
  }
}

export default DeleteNote;
