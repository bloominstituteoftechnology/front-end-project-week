import React from "react";
import styled from "styled-components";
class DeleteBox extends React.Component {
  render() {
    return (
      <StyledDeleteBox>
        <div className="delete-box">
          <h3>Are you sure?</h3>
          <div>
            <button onClick={this.props.deleteNote}>Delete</button>
            <button onClick={this.props.toggleDelete}>No</button>
          </div>
        </div>
      </StyledDeleteBox>
    );
  }
}
const StyledDeleteBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  opacity: 0.5;
  .delete-box {
    margin: 200px auto;
    background: gray;
    opacity: 1;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default DeleteBox;
