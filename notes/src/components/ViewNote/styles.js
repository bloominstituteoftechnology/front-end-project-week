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
  position: sticky;
  top: 0;
  z-index: 2;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background: ${colors.backgroundColor};
  padding: 22px 0 26px;
  @media (max-width: 940px) {
    align-self: flex-end;
    width: 70%;
  }
  @media (max-width: 700px) {
    position: static;
    width: 100%;
    padding: 8px 0 18px;
  }
`;

export const NoteLink = styled(StyledLink)`
  text-decoration: none;
`;

export const NoteLinkText = styled.span`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.buttonColor};
  text-decoration: underline;
  margin-left: 10px;
`;

export const NoteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  /* padding-top: 26px; */
`;

export const NoteTitle = styled(StyledH3)``;

export const NoteContent = styled(StyledP)`
  line-height: 2.8rem;
  white-space: pre-wrap;
  margin-top: 30px;
`;
