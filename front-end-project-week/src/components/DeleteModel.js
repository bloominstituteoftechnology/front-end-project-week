import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivModel = styled.div`
  position: absolute;
  z-index: 9999;
  top: 30%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 200px;
  display: ${props => (props.visible === 'true' ? `flex` : `none`)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`;

const H3Message = styled.h3`
  font-weight: normal;
  user-select: none;
`;

const ButtonModel = styled.button`
  font-size: 20px;
  width: 200px;
  height: 50px;
  border: 1px solid rgb(151, 151, 151);
  background-color: ${props => props.delete && `rgb(208, 2, 27)`};
  background-color: ${props => props.no && `rgb(43, 193, 196)`};
  color: white;
  cursor: pointer;
  user-select: none;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    transition: all 0.2s ease-in;
    background-color: ${props => props.delete && `rgb(180, 2, 26)`};
    background-color: ${props => props.no && `rgb(103, 219, 222)`};
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DeleteModel = props => {
  return (
    <DivModel visible={props.visible}>
      <H3Message>Are you sure you want to delete this?</H3Message>
      <div>
        <ButtonModel
          delete
          onClick={e => props.deleteNoteAndHideModel(e, props.noteId)}
        >
          Delete
        </ButtonModel>
        <ButtonModel no onClick={e => props.hideDeleteModel(e)}>
          No
        </ButtonModel>
      </div>
    </DivModel>
  );
};

DeleteModel.propTypes = {
  noteId: PropTypes.string,
  visible: PropTypes.string,
  deleteNoteAndHideModel: PropTypes.func,
  hideDeleteModel: PropTypes.func
};

export default DeleteModel;
