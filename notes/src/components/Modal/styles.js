import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  ${props => {
    if (props.showModal === 'false') {
      return `display: none;`;
    } else {
      return `display: flex;`
    }
  }}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 50;
`;

export const StyledModal = styled.div`
  background: #fff;
  border-radius: 5;
  max-width: 500;
  min-height: 300;
  margin: 0 auto;
  padding: 30;
`;
