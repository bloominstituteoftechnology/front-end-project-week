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
    .input {
        padding-left: 10px; 
        border-radius: 5px;
        border: 2px solid #D1D0D1;
        ::placeholder {
            font-weight: bold;
            font-size: 14px;
        }
        :focus {
            border: 2px solid darkgrey;
            outline: none;
        }
    }
  .input-title {
    width: 280px;
    margin-bottom: 10px;
    height: 40px;
    }
  }
  .input-content {
    padding-top: 15px;
    padding-left: 15px;
}

`;

const Button = styled.div`
  background-color: #5eb3bb;
  height: 40px;
  text-align: center;
  margin-left: 2px;
  margin-top: 10px;
 
  display: flex;
  color: white;
  font-weight: bold;
  width: 160px;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        title: "",
        // tags: "",
        body: ""
      }
    };
  }
  handleInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      comment: { ...prevState.comment, [name]: value }
    }));
  };

  render() {
    return (
      <StyledViewWrapper>
        <h2>Create New Note:</h2>

        <StyledForm>
          <input
            name="title"
            placeholder="Note Title"
            onChange={this.handleInput}
            className="input input-title"
          />
          <textarea
            name="body"
            rows="15"
            cols="60"
            placeholder="Note Content"
            onChange={this.handleInput}
            className="input input-content"
          />
          <Button>Save</Button>
        </StyledForm>
      </StyledViewWrapper>
    );
  }
}

export default CreateNote;
