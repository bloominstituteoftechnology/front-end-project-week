import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { deleteNote } from "../actions";

const StyledDelete = styled.div`
  position: absolute;
  background: white;
  border: 1px solid grey;
  margin-top: 10%;
  text-align: center;

  .delete-modal {
    text-align: center;
    width: 400px;
    height: 100px;
    margin-top: 30px;
    font-size: 14px;
  }

  .delete-button {
    width: 150px;
    height: 30px;
    background: red;
    margin-right: 5px;
    margin-top: 6px;
  }

  .no-button {
    width: 150px;
    height: 30px;
    background: #2bc1c4;
    margin-left: 5px;
    margin-top: 6px;
  }
`;

class Delete extends React.Component {
  render() {
    console.log("this.props.id sent to deleteNote", this.props.id);
    return (
      <StyledDelete>
        <div className="delete-modal">
          <p>Are you sure you want to delete this?</p>
          <Link to={"/"}>
            <button
              className="delete-button"
              type="button"
              onClick={() => {
                this.props.deleteNote(this.props.id);
              }}
            >
              Delete
            </button>
          </Link>
          <button
            className="no-button"
            type="button"
            onClick={() => {
              this.props.toggleModal();
            }}
          >
            No
          </button>
        </div>
      </StyledDelete>
    );
  }
}

const mapStateToProp = state => {
  return {
    notes: state.notes
  };
};

export default connect(null, { deleteNote })(Delete);
