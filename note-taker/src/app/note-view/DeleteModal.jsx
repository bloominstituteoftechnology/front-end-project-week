import React from "react";
import "bulma/css/bulma.css";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import "../styles/custom-props.css";
import styled from "styled-components";
const ModalBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 220px;
  background: white;
  border: 1px solid var(--main-border-color);
  padding: 0 60px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const WarningText = styled.p`
  display: flex;
  justify-content: center;
`;
const DeleteModal = props => {
  return (
    <div className="modal">
      <div className="modal-background" />
      <div className="modal-content">
        <ModalBody>
          <WarningText>Are you sure you want to delete this?</WarningText>
          <ButtonsContainer>
            <GeneralBtn width="15rem" danger>
              Delete
            </GeneralBtn>
            <GeneralBtn width="15rem">No</GeneralBtn>
          </ButtonsContainer>
        </ModalBody>
      </div>
    </div>
  );
};

export default DeleteModal;
