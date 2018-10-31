import styled from 'styled-components';
import { customLayout } from '../../mixins';

// NotesList component
export const NotesContainer = styled.div`
  max-height: 100%;
`;

export const SubHeading = styled.h2`
  margin-top: 25px;
  margin-left: 2%;
  font-weight: bold;
  font-size: 2.5rem;
  color: #4B4B4A;
`;

export const NotesWrapper = styled.section`
  ${customLayout()}
  width: 100%;
  max-height: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
`;

export const NoteCard = styled.div`
  width: 29%;
  height: 280px;
  margin: 0 2%;
  margin-bottom: 30px;
  border: 1px solid #B7B5B7;
  padding: 20px;
  background-color: #FFF;
`;

export const TitleHeading = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;

export const Hr = styled.hr`
  border: 1px solid #B7B5B7;
`;

export const TextBody = styled.p`
  font-size: 1.4rem;
  line-height: 25px;
  color: #4B4B4A;
`;

// Create/Edit Form

