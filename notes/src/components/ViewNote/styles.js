import styled from 'styled-components';
import { StyledH3, ViewContainer, StyledP, StyledLink } from '../../mixins';
import { colors } from '../../variables';

export const NoteView = styled(ViewContainer)`
  padding: 0 38px 64px 40px;
  @media (max-width: 700px) {
    padding-top: 44px;
  }
`;

export const NoteLinkContainer = styled.div`
  align-items: center;
  background: ${colors.backgroundColor};
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  padding: 22px 0 26px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  @media (max-width: 940px) {
    align-self: flex-end;
    width: 70%;
  }
  @media (max-width: 700px) {
    padding: 8px 0 18px;
    position: static;
    width: 100%;
  }
`;

export const NoteLink = styled(StyledLink)`
  text-decoration: none;
`;

export const NoteLinkText = styled.span`
  color: ${colors.buttonColor};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 10px;
  text-decoration: underline;
`;

export const NoteTextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  /* padding-top: 26px; */
  width: 100%;
`;

export const NoteTitle = styled(StyledH3)``;

export const NoteContent = styled(StyledP)`
  line-height: 2.8rem;
  margin-top: 30px;
  white-space: pre-wrap;
`;
