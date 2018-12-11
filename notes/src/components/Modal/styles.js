import styled from 'styled-components';
import { StyledP, Button } from '../../mixins';
import { colors } from '../../variables';

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
  z-index: 3;
  background: rgba(231, 231, 231, 0.7);
  padding-top: 64px;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  width: 80vw;
  max-width: 598px;
  height: 212px;
  background: rgb(255, 255, 255);
  padding: 36px;
  border-radius: 7px;
  margin: auto auto 45vh;
  box-shadow: 0 5px 20px -5px rgb(0, 0, 0);
`;

export const ModalMessage = styled(StyledP)`
  font-weight: 500;
  margin: 0 10%;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    /* margin-bottom: 28px; */
  }
`;

export const ModalDeleteButton = styled(Button)`
  background: ${colors.buttonNegColor};
  @media (max-width: 940px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const ModalNoButton = styled(Button)`
  @media (max-width: 940px) {
    width: 100%;
  }
`;
