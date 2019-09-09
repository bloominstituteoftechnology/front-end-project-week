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
  position: sticky;
  top: 0;
  z-index: 2;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1000px;
  background: ${colors.backgroundColor};
  padding: 8px 5% 8px 40px;
  margin-right: 10px;
  @media (max-width: 940px) {
    align-self: flex-end;
    justify-content: space-around;
    width: 70%;
    padding: 8px 5vw;
  }
  @media (max-width: 700px) {
    position: static;
    justify-content: space-between;
    width: 100%;
    padding-top: 2px;
  }
`;

export const SearchInput = styled(StyledInput)`
  width: 70%;
  margin: 0;
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
  width: 96px;
  display: none;
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
  width: 100%;
  padding: 33px 0 33px 40px;
  @media (max-width: 940px) {
    padding-left: 6vw;
  }
`;

export const StyledNoteLink = styled(StyledLink)`
  width: 93%;
  max-width: 900px;
  /* margin-right: 17.5px; */
  margin-bottom: 27px;
  animation-name: out;
  animation-duration: 150ms;
  box-shadow: 0 5px 25px -15px rgb(0, 0, 0);
  /* @media (max-width: 940px) {
    width: 28vw;
  }
  @media (max-width: 700px) {
    width: 42vw;
  }
  @media (max-width: 500px) {
    width: 88vw; */
  }
  :hover {
    animation-name: in;
    animation-duration: 370ms;
    box-shadow: 0 15px 50px -20px rgb(0, 0, 0);
  }
  @keyframes in {
    from {
      box-shadow: 0 5px 25px -15px rgb(0, 0, 0);
    }
    to {
      box-shadow: 0 15px 50px -20px rgb(0, 0, 0);
    }
  }
  @keyframes out {
    from {
      box-shadow: 0 15px 50px -20px rgb(0, 0, 0);
    }
    to {
      box-shadow: 0 5px 25px -15px rgb(0, 0, 0);
    }
  }
`;
