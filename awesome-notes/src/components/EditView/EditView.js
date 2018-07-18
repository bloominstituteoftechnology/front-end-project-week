import React from "react";
import styled from "styled-components";
import ContentHeading from "../ContentHeading/ContentHeading";
import GlobalButton from "../GlobalButton/GlobalButton";

const EditWrapper = styled.div`
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
      current: this.props.content.find(
        x => x._id === this.props.match.params._id
      ),
      title: "",
      textBody: ""
    };
  }

  /* make me */
  handleChange = e => {
    console.log("HANDLE CHANGE EVENT TARGET", e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  /* make me */
  handleSubmit = e => {};

  render() {
    console.log("CREATE NEW VIEW STATE CURRENT", this.state.current);
    return (
      <EditWrapper>
        <ContentHeading message="Edit Note:" />
        <form onSubmit={this.handleSubmit}>
          <TitleInput
            className="form-control"
            name="title"
            placeholder="title"
            value={
              this.state.title ? this.state.title : this.state.current.title
            }
            onChange={this.handleChange}
          />
          <br />
          <BodyInput
            className="form-control"
            name="textBody"
            placeholder="note"
            value={
              this.state.textBody
                ? this.state.textBody
                : this.state.current.textBody
            }
            onChange={this.handleChange}
          />
          <GlobalButton message="Update" type="submit" />
        </form>
      </EditWrapper>
    );
  }
}

export default CreateNewView;
