import styled from 'styled-components';
import { ViewContainer, StyledH3 } from '../../mixins';
import { StyledLink } from '../../mixins';

export const StyledView = styled(ViewContainer)`
padding-right: 0;
`;

export const ListTitle = styled(StyledH3)``;

export const StyledListDiv = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
width: 100%;
padding: 33px 1px;
`;

export const StyledNoteLink = styled(StyledLink)`
  margin-right: 17.5px;
  margin-bottom: 27px;
`;