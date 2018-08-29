import React, { Component } from "react";
import styled from "styled-components";

const StyledViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  h2 {
    padding-top: 25px;
    margin-bottom: 18px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
      font-weight: bold;
      margin-bottom:4px;
  }

  .test {
    color: red;
    width: 200px;
    margin-bottom: 20px;
  }
  .test2 {
    width: 600px;
    height: 400px;
  }
`;

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        title: "",
        tags: "",
        body: ""
      }
    };
  }

  render() {
    return (
      <StyledViewWrapper>
        <h2>Create a note:</h2>

        <StyledForm>
          <h3>Title</h3>
          <input className="test"  />
          <h3>Text Body</h3>
          <input className="test2"  />
        </StyledForm>
      </StyledViewWrapper>
    );
  }
}

export default CreateNote;
