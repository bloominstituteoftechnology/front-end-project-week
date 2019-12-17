import styled from 'styled-components';


export const Container = styled.div`
   width: 100%;
   max-width: 1000px;
   min-height: 100vh;
   margin: 0 auto;
   font-size: 2rem;
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

// Right side 
export const RightDiv = styled.div`
  width: 75%;
  min-height: 100vh;
  border: 10px pink;
  background-color: #f3f3f3;
  @media (max-width: 500px) {
    width: 100%
  }
`;