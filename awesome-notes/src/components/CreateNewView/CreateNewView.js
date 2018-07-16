import React from "react";
import styled from "styled-components";
import ContentHeading from "../ContentHeading/ContentHeading";
import GlobalButton from "../GlobalButton/GlobalButton";

const CreateNewWrapper = styled.div`
  width: 610px;
  position: relative;
  top: 0;
  margin: 0 auto;
  margin-top: 7rem;
`;

const TitleInput = styled.input`
  font-size: 1.6rem;
  width: 35rem;
  border-radius: 5px;
`;

const BodyInput = styled.textarea`
  font-size: 1.6rem;
  border-radius: 5px;
  height: 40rem;
`;

class CreateNewView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  /* make me */
  handleChange = event => {};

  /* make me */
  handleSubmit = event => {};

  render() {
    return (
      <CreateNewWrapper>
        <ContentHeading message="Create New Note:" />
        <form onSubmit={this.handleSubmit}>
          <TitleInput
            className="form-control"
            name="titleInput"
            placeholder="title"
            onChange={this.handleChange}
          />
          <br />
          <BodyInput
            className="form-control"
            name="bodyInput"
            placeholder="note"
            onChange={this.handleChange}
          />
          <GlobalButton message="Save" type="submit" />
        </form>
      </CreateNewWrapper>
    );
  }
}

export default CreateNewView;
