import styled from 'styled-components';
import { customLayout } from '../../mixins';

export const NotesContainer = styled.div`
  border: 1px solid red;
  max-height: 100%;
`;

export const NotesWrapper = styled.section`
  ${customLayout('space-between')}
  border: 1px solid blue;
  width: 100%;
  max-height: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
`;

export const NoteCard = styled.div`
  border: 1px solid green;
  width: 32%;
  height: 280px;
  margin-bottom: 30px;
  padding: 20px;
`;
