import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';
// import PropTypes from 'prop-types';

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
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class DeleteModel extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  deleteNote = e => {
    e.preventDefault();
    this.props.hideDeleteModel(e);
    this.setState({ redirect: true });
  };

  cancel = e => {
    e.preventDefault();
    this.props.hideDeleteModel(e);
  };

  render() {
    console.log(this.state);
    if (this.state.redirect) {
      console.log(this.state);
      return (
        <Redirect
          push
          to={`${this.props.urlLinks.home}${this.props.urlLinks.readNotes}`}
        />
      );
    }

    return (
      <DivModel visible={this.props.visible}>
        <H3Message>Are you sure you want to delete this?</H3Message>
        <div>
          <ButtonModel delete onClick={e => this.deleteNote(e)} type='button'>
            Delete
          </ButtonModel>
          <ButtonModel no onClick={e => this.cancel(e)}>
            No
          </ButtonModel>
        </div>
      </DivModel>
    );
  }
}
// DeleteModel.propTypes = {
//   propertyName: PropTypes.string
// }

export default DeleteModel;
