import styled from 'styled-components';
import { Button, StyledLink } from '../../mixins';
import { colors } from '../../variables';

export const StyledSidebar = styled.div`
  align-items: flex-start;
  background: ${colors.backgroundColor};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  overflow-x: hidden;
  padding: 25px 16px;
  width: 249px;
  @media (max-width: 940px) {
    flex-direction: row;
    height: 62px;
    justify-content: space-between;
    left: 0;
    padding: 8px 0 0 5vw;
    position: fixed;
    top: 0;
    width: 30%;
    z-index: 3;
  }
  @media (max-width: 700px) {
    align-self: stretch;
    height: 44px;
    padding-right: 5vw;
    width: 100%;
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
  color: ${colors.buttonColor};
  font-size: 4rem;
  line-height: 3rem;
  margin: 0 0 35px;
  text-align: left;
  width: 60%;
  @media (max-width: 940px) {
    font-size: 2rem;
    line-height: 1.5rem;
    width: initial;
  }
`;

export const StyledSidebarLink = styled(StyledLink)`
  margin-bottom: 21px;
  text-decoration: none;
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
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    width: 46px;
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
  background: ${colors.buttonNegColor};
  display: none;
  @media (max-width: 940px) {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    width: 46px;
  }
  @media (max-width: 700px) {
    width: 40px;
  }
`;
