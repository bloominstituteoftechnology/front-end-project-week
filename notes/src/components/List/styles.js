import styled from 'styled-components';
import { ViewContainer, StyledH3 } from '../../mixins';
import { StyledLink } from '../../mixins';

export const StyledView = styled(ViewContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgb(243, 243, 243);
  padding: 64px 30px 0;
  `;

export const ListTitle = styled(StyledH3)``;

export const StyledListDiv = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
padding: 33px 1px;
`;

export const StyledNoteLink = styled(StyledLink)`
  margin-bottom: 27px;
`;