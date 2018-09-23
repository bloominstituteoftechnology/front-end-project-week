import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  @media (max-width: 720px) {
    display: block;
    height: 200px;
    width: 100%;
  }
`;

// shared styles

// page related styles
export const Page = styled.div`
  padding: 20px 40px;
  background: #f9f9f9;
  width: 100%;
  border-left: 1px solid #eee;
  @media (max-width: 720px) {
    height: 100vh;
    padding: 20px 10px;
  }
`;
export const PageHeader = styled.h2`
  margin: ${props => (props.singleNote ? "60px 20px 20px 20px" : "40px 20px")};
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
  border-bottom: 1px solid #eee;
  @media (max-width: 720px) {
    justify-content: flex-start;
    margin: -20px -40px 0px -40px;
    padding-left: 60px;
    border-top: 1px solid #eee;
  }
`;

export const ModeLink = styled.h4`
  padding: 15px 25px 15px 0;
  color: #111;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

// buttons
export const StyledButton = styled.button`
  width: 220px;
  height: 50px;
  background-color: ${props => (props.delete ? "#f27670" : "#00b6bb")};
  color: white;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  border: none;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.4rem;
  cursor: pointer;
  text-align: center;
  transition: background 100ms ease-in-out, transform 100ms ease;
  &:hover,
  &:focus {
    background: ${props => (props.delete ? "#a53d38" : "#077075")};
    outline: none;
  }
  @media (max-width: 720px) {
    height: 50px;
    width: 160px;
    margin: 20px 5px 0 5px;
    font-size: 12px;
  }
`;
