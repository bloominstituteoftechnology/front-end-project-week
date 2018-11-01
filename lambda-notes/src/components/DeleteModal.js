import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ModalViewContainer = styled.div`
  background: #d7d7d7;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
  max-width: 2000px;
  border: 1px solid gray;
  margin: 0;
  font-size: 62.5%;
  box-sizing: border-box;
  position: fixed;
  opacity: 0.5;
  z-index: 1;
  border: solid red;
`;

const ModalContainer = styled.div`
  background: white;
  max-height: 10vh;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
  max-width: 500px;
  border: 1px solid gray;
  margin: 0 auto;
  font-size: 62.5%;
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  border: solid purple;
`;

class DeleteModal extends Component {
  render() {
    return (
      <div>
        <ModalViewContainer>
          <ModalContainer>
            <h1>Delete Modal</h1>
          </ModalContainer>
        </ModalViewContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mightDelete: state.mightDelete
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(DeleteModal)
);
