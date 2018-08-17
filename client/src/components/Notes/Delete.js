import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #555;
  opacity: 0.7;
  height: ${window.innerHeight}px;
  width: ${window.innerWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-left: -400px;
`;

const Box = styled.div`
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 200px;
  width: 700px;
  border: 2px solid black;
`;

const Question = styled.h3`
  font-size: 24px;
  margin-top: 30px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 250px;
  height: 60px;
  background: ${props => (props.warning ? 'red' : '#009999')};
  color: white;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  align-items: center;
  cursor: pointer;
`;

const Delete = props => {
  return (
    <Container>
      <Box>
        <Question>Are you sure you want to delete this?</Question>
        <ButtonContainer>
          <Button warning onClick={() => props.handleDelete()}>
            Delete
          </Button>
          <Button onClick={() => props.cancelDelete()}>No</Button>
        </ButtonContainer>
      </Box>
    </Container>
  );
};

export default Delete;
