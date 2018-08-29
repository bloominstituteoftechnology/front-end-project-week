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
    width: 200px;
    margin-bottom: 20px;
  }


`;

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 
      {
        title: "",
        // tags: "",
        body: ""
      }
    
    };
  }
  handleInput = (event) => {

    const {name, value} = event.target 
    this.setState((prevState) => ({ comment: {...prevState.comment, [name]: value }}));

  }

  render() {
    return (
      <StyledViewWrapper>
        <h2>Create a note:</h2>

        <StyledForm>
          <h3>Title</h3>
          <input name="title" onChange={this.handleInput} className="test"  />
          <h3>Text Body</h3>
          
          <textarea name="body" rows="15" cols="60" onChange={this.handleInput} class="longInput" />
        </StyledForm>
      </StyledViewWrapper>
    );
  }
}

export default CreateNote;
