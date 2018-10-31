import styled from 'styled-components';
import { StyledP, Button } from '../../mixins';

export const StyledBackdrop = styled.div`
  ${(props) => {
    if (props.showModal === 'false') {
      return `display: none;`;
    } else {
      return `display: flex;`;
    }
  }} position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(152, 152, 152, 0.7);
  padding: 50;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 5;
  width: 50vw;
  max-width: 598px;
  height: 202px;
  border: 1px solid rgb(81, 81, 81);
  margin: 191px auto;
`;

export const ModalMessage = styled(StyledP)`
  font-weight: 500;
  margin-top: 28px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 76%;
  /* padding-bottom: 10px; */
`;

export const ModalDeleteButton = styled(Button)`
  background: rgb(208, 1, 27);
`;

export const ModalNoButton = styled(Button)``;
