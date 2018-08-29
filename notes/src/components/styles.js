import styled from "styled-components";

// shared styles

// page related styles
export const Page = styled.div`
  padding: 20px 40px;
  background: #f9f9f9;
  width: 100%;
`;
export const PageHeader = styled.h2`
  margin:  ${props => (props.singleNote ? "60px 20px 20px 20px" : "40px 20px")};
  padding-bottom: ${props => (props.singleNoteEdit ? "20px" : "0px")};
`;

// Notes
export const NoteBody = styled.p`
  padding: 20px;
  line-height: 1.6;
`;

// Edit Delete mode controls
export const ModeWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  margin: -20px -40px 0 -40px;
  padding-right: ${props => (props.cancel ? "30px" : "30px")};
  background: white;
  border-bottom: 1px solid #ccc;
`;

export const ModeLink = styled.h4`
  padding: 15px 25px 15px 0;
  color: #111;
  font-weight: 600;
  cursor: pointer;
`;

// buttons
export const StyledButton = styled.button`
  width: 220px;
  height: 50px;
  background-color: ${props => (props.delete ? "palevioletred" : "#00b6bb")};
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
