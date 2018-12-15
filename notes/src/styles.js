import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  //max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 940px) {
    flex-direction: column;
  }
`;
