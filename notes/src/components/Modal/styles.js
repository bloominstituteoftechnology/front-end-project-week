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
  }} 
  background: rgba(231, 231, 231, 0.7);
  bottom: 0;
  left: 0;
  padding-top: 64px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const StyledModal = styled.div`
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 7px;
  box-shadow: 0 5px 20px -5px rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  height: 212px;
  justify-content: space-around;
  margin: auto auto 45vh;
  max-width: 598px;
  padding: 36px;
  width: 80vw;
  z-index: 3;
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
    align-items: center;
    flex-direction: column;
    /* margin-bottom: 28px; */
    width: 80%;
  }
`;

export const ModalDeleteButton = styled(Button)`
  background: ${colors.buttonNegColor};
  @media (max-width: 940px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const ModalNoButton = styled(Button)`
  @media (max-width: 940px) {
    width: 100%;
  }
`;
