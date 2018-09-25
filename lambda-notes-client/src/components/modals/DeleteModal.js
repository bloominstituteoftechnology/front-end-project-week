import React from 'react';
import styled from "react-emotion";
import axios from 'axios';
import { connect } from 'react-redux';

import { updateNotes } from '../../store/actions'; 


const Container = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const Opacity = styled("div")`
  background: rgba(215, 215, 215, .8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Modal = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -360px;
  margin-top: -240px;
  width: 718px;
  height: 242px;
  background: white;
  border: 1px solid black;
  z-index: 30;
  text-align: center;

  p {
    font-size: 1.8rem;
    margin-top: 53px;
  }
  div {
    display: flex;
    justify-content: center;
   
    button {
      display: flex;
      margin-top: 38px;
      padding: 18px;
      width: 250px;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      background-color: #2AC0C4;
      border: solid 1px #939797;
      &:hover {
        cursor: pointer;
        background-color: #23a0a4;
      }
    }
    .first {
      margin-right: 20px;
      background-color: red;
    }
  }
`;


class DeleteModal extends React.Component {  


  handleDelete = () => {
    const token = localStorage.getItem('jwt')
    const { id } = this.props;
    const reqOptions = {
      headers: {
        Authorization: token,
      }
    }

    axios.delete(`http://localhost:8000/protected/notes/${id}`, reqOptions)
    .then(res => {
      axios.get('http://localhost:8000/protected/notes', reqOptions)
      .then(res => {
        this.props.updateNotesHandler(res.data)
        this.props.handleModal();
        this.props.history.goBack();
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => console.log(err))
  };

  handleClose = () => this.props.handleModal();


  render() {
    return (
      <Container>
        <Opacity onClick={() => this.handleClose()} />
        <Modal>
          <p>Are you sure you want to delete this?</p>
          <div>
            <button className="first" onClick={() => this.handleDelete()}>
              Delete
            </button>
            <button className="last" onClick={() => this.handleClose()}>
              No
            </button>
          </div>
        </Modal>
      </Container>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  updateNotesHandler: lePackage => {
    dispatch(updateNotes(lePackage));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteModal);

