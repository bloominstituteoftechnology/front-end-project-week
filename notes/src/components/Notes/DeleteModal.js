import React from 'react';
import styled from 'styled-components';

const DeleteModal = (props) => {
  console.log('deleteModal', props);

  const handleDelete = () => {
    console.log('handleDelete');
    props.deleteData(props.note.id);
    props.history.push('/');
  };

  return (
    <Modal
      style={props.isModalVisible ? { display: 'block' } : { display: 'none' }}
    >
      <BackGround />
      <Container>
        <Text>Are you sure you want to delete this?</Text>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <NoButton onClick={props.handleModalVisible}>No</NoButton>
      </Container>
    </Modal>
  );
};

export default DeleteModal;

const Modal = styled.div`
  padding: 200px 0;
  z-index: 2;
  position: fixed;
  width:100%
  // height: 100%;
  top:0;
  left:0;
`;

const Container = styled.div`
  height: 200px;
  width: 50%;
  background: white;
  border: 2px solid black;
  margin: auto;
  opacity: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.h1`
  color: black;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding-top: 40px;
`;

const Button = styled.button`
  border: 1px solid #aebfc0;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 1rem;
  margin: 0 20px;
`;

const DeleteButton = styled(Button)`
  background: #b92626;
`;

const NoButton = styled(Button)`
  background: #59b5bb;
`;

const BackGround = styled.div`
  color: black;
  opacity: 0.3;
  position: fixed;
  width: 100%;
  height: 100%;
  background: gray;
  top: 0;
  left: 0;
  z-index: -1;
`;
