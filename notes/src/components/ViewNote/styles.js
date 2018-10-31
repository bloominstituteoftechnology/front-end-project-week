import styled from 'styled-components';
import { StyledH3, ViewContainer, StyledP } from '../../mixins';

export const NoteView = styled(ViewContainer)`
padding: 22px 38px 64px 30px;
`;

export const NoteLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const NoteLink = styled.span`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(74, 73, 74);
  text-decoration: underline;
  margin-left: 10px;
`;

export const NoteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 26px;
`;

export const NoteTitle = styled(StyledH3)``;

export const NoteContent = styled(StyledP)`
  line-height: 2.8rem;
  margin-top: 30px;
`;