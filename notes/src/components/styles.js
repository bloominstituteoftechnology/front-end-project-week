import styled from "styled-components";

// shared styles

// page related styles
export const Page = styled.div`
  padding: 20px 40px;
  background: #f9f9f9;
  width: 100%;
`;
export const PageHeader = styled.h2`
  margin: 40px 20px;
`;

// Notes
export const NoteBody = styled.p`
    padding: 20px;
    line-height: 1.6;
`


// buttons
export const StyledButton = styled.button`
  width: 220px;
  height: 50px;
  background-color: #00b6bb;
  color: white;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  &:hover,
  &:focus {
    background: #077074;
    outline: none;
  }
`;
