import React from "react";
import "bulma/css/bulma.css";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import "../styles/custom-props.css";
import styled from "styled-components";
import { Link } from 'react-router-dom';
const ModalBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 220px;
  background: var(--main-bg);
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
    <div className={`modal ${props.deleteModalActive ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-content">
        <ModalBody>
          <WarningText>Are you sure you want to delete this?</WarningText>
          <ButtonsContainer>
            <Link to = "/">
            <GeneralBtn width="15rem" danger onClick = {() => {
              props.deleteModalHandler();
              props.noteDeletionHandler(props.id);
              props.fetchAllNotesHandler();
              }}>
              Delete
            </GeneralBtn>
            </Link>
            <GeneralBtn width="15rem" onClick = {props.deleteModalHandler}>No</GeneralBtn>
          </ButtonsContainer>
        </ModalBody>
      </div>
    </div>
  );
};

export default DeleteModal;
