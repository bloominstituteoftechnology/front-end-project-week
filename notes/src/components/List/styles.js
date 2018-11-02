import styled from 'styled-components';
import { ViewContainer, StyledH3, StyledInput, Button } from '../../mixins';
import { StyledLink } from '../../mixins';

export const StyledView = styled(ViewContainer)`
padding: 0;
`;

export const SearchBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 64px;
  background: rgb(243, 243, 243);
  padding: 8px 0px;
  /* background: linear-gradient(rgb(243, 243, 243) 52px, transparent); */
  /* border-bottom: 1px solid rgb(152, 152, 152); */
  /* margin-bottom: 8px; */
`;

export const SearchInput = styled(StyledInput)`
  width: 30%;
  margin: 0;
`;

export const NewOldButton = styled(Button)`
  
`;

export const OldNewButton = styled(Button)`
  
`;

export const ListTitle = styled(StyledH3)`
  margin-left: 30px;
`;

export const StyledListDiv = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
width: 100%;
padding: 33px 0 33px 31px;
`;

export const StyledNoteLink = styled(StyledLink)`
  margin-right: 17.5px;
  margin-bottom: 27px;
  animation-name: out;
  animation-duration: 150ms;
  box-shadow: 0px 3px 5px -3px rgb(0, 0, 0);
  :hover {
    animation-name: in;
    animation-duration: 300ms;
    box-shadow: 0 5px 20px -5px rgb(0, 0, 0);
  }
  @keyframes in {
    from {
      box-shadow: 0px 3px 5px -3px rgb(0, 0, 0);
    }
    to {
      box-shadow: 0 5px 20px -5px rgb(0, 0, 0);
    }
  }
  @keyframes out {
    from {
      box-shadow: 0 5px 20px -5px rgb(0, 0, 0);
    }
    to {
      box-shadow: 0px 3px 5px -3px rgb(0, 0, 0);
    }
  }
`;