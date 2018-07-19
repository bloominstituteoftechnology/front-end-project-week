import React from "react";
import styled from "styled-components";
import GlobalButton from "../GlobalButton/GlobalButton";
import DeleteButton from "../GlobalButton/DeleteButton";
import CancelDeleteButton from "../GlobalButton/CancelDeleteButton";

const ModalWrapper = styled.div`
  height: 100vh;
  width: 888px;
  background-color: rgba(216, 216, 216, 0.5);
  position: relative;
  top: -185px;
  left: -248px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const DeleteButtonsWrapper = styled.div`
  height: 200px;
  width: 500px;
  background-color: #f3f3f3;
  border: 1px solid #979797;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const ButtonsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonSpacer = styled.div`
  width: 20px;
`;

const TextSection = styled.p``;

const DeleteModal = props => {
  console.log("DELETE MODAL PROPS", props);
  return (
    <ModalWrapper>
      <DeleteButtonsWrapper>
        <TextSection>Are you sure you want to delete this?</TextSection>
        <ButtonsSection>
          <DeleteButton
            message="Delete"
            delHandler={props.delHandler}
            currentNote={props.currentNote}
          />
          <ButtonSpacer />
          <CancelDeleteButton message="no" hideModal={props.hideModal} />
        </ButtonsSection>
      </DeleteButtonsWrapper>
    </ModalWrapper>
  );
};

export default DeleteModal;
