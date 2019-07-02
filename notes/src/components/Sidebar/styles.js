import styled from 'styled-components';
import { Button, StyledLink } from '../../mixins';
import { colors } from '../../variables';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  height: 100vh;
  width: 249px;
  background: ${colors.backgroundColor};
  overflow-x: hidden;
  padding: 25px 16px;
  @media (max-width: 940px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    height: 62px;
    padding: 8px 0 0 5vw;
  }
  @media (max-width: 700px) {
    width: 100%;
    align-self: stretch;
    height: 44px;
    padding-right: 5vw;
  }
`;

export const StyledSidebarTitleLink = styled(StyledLink)`
  @media (max-width: 940px) {
    width: 76px;
  }
  @media (max-width: 700px) {
    width: 40px;
  }
`;

export const StyledH1 = styled.h1`
  width: 60%;
  font-size: 4rem;
  color: ${colors.buttonColor};
  line-height: 3rem;
  text-align: left;
  margin: 0 0 35px;
  @media (max-width: 940px) {
    width: initial;
    font-size: 2rem;
    line-height: 1.5rem;
  }
`;

export const StyledSidebarLink = styled(StyledLink)`
  text-decoration: none;
  margin-bottom: 21px;
  @media (max-width: 940px) {
    /* margin: 0; */
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 940px) {
    display: none;
  }
`;

export const StyledMobileButton = styled(Button)`
  display: none;
  @media (max-width: 940px) {
    display: flex;
    width: 46px;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  @media (max-width: 700px) {
    width: 40px;
  }
`;

export const StyledAltButton = styled(Button)`
  background: ${colors.buttonNegColor};
  @media (max-width: 940px) {
    display: none;
  }
`;

export const StyledMobileAltButton = styled(Button)`
  display: none;
  background: ${colors.buttonNegColor};
  @media (max-width: 940px) {
    display: flex;
    width: 46px;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  @media (max-width: 700px) {
    width: 40px;
  }
`;
