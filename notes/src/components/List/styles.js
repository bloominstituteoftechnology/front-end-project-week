import styled from 'styled-components';
import { ViewContainer, StyledH3, StyledInput, Button } from '../../mixins';
import { StyledLink } from '../../mixins';
import { colors } from '../../variables';

export const StyledView = styled(ViewContainer)`
  padding: 0;
  @media (max-width: 700px) {
    padding-top: 44px;
  }
`;

export const SearchBar = styled.div`
  align-items: center;
  background: ${colors.backgroundColor};
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  margin-right: 10px;
  max-width: 1000px;
  padding: 8px 5% 8px 40px;
  position: sticky;
  top: 0;
  width: 95%;
  z-index: 2;
  @media (max-width: 940px) {
    align-self: flex-end;
    justify-content: space-around;
    padding: 8px 5vw;
    width: 70%;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
    padding-top: 2px;
    position: static;
    width: 100%;
  }
`;

export const SearchInput = styled(StyledInput)`
  margin: 0;
  width: 70%;
  @media (max-width: 940px) {
    width: 40vw;
  }
  @media (max-width: 700px) {
    width: 60vw;
  }
  @media (max-width: 500px) {
    width: 55vw;
  }
`;

export const NewOldButton = styled(Button)`
  @media (max-width: 940px) {
    width: 126px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const NewOldMobileButton = styled(Button)`
  display: none;
  width: 96px;
  @media (max-width: 500px) {
    display: initial;
  }
`;

export const ListTitle = styled(StyledH3)`
  margin-left: 40px;
  @media (max-width: 940px) {
    margin-left: 5vw;
  }
`;

export const StyledListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 33px 0 33px 40px;
  width: 100%;
  @media (max-width: 940px) {
    padding-left: 6vw;
  }
`;

export const StyledNoteLink = styled(StyledLink)`
  animation-duration: 150ms;
  animation-name: out;
  box-shadow: 0 0 0 0 #000000;
  margin-bottom: 27px;
  /* margin-right: 17.5px; */
  max-width: 900px;
  width: 93%;
  /* @media (max-width: 940px) {
    width: 28vw;
  }
  @media (max-width: 700px) {
    width: 42vw;
  }
  @media (max-width: 500px) {
    width: 88vw;
  } */
  :hover {
    animation-duration: 370ms;
    animation-name: in;
    box-shadow: 0 15px 50px -35px #000000;
  }
  @keyframes in {
    from {
      box-shadow: 0 0 0 0 #000000;
    }
    to {
      box-shadow: 0 15px 50px -35px #000000;
    }
  }
  @keyframes out {
    from {
      box-shadow: 0 15px 50px -35px #000000;
    }
    to {
      box-shadow: 0 0 0 0 #000000;
    }
  }
`;
