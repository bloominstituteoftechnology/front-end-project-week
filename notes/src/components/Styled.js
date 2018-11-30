import styled from "styled-components";
import { Link } from "react-router-dom";

//App.js
export const AppWrapper = styled.div`
  margin: 10px;
  width: 100%;
  max-width: 915px;
  display: flex;
`;

//SideBar.js
export const SideBarWrapper = styled.div`
  background: #d3d2d3;
`;
export const SideBarLinksWrapper = styled.ul`
  list-style-type: none;
`;
export const Btn = styled.button`
  width: 192px;
  height: 40px;
  border: 1px solid #afb4b5;
  background: #57b5bb;
  color: #f3f7f6;
`;

//CreateNewView.js
export const NoteFormWrapper = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const TitleInput = styled.input`
  width: 358px;
  height: 43px;
`;
export const ContentInput = styled.input`
  width: 610px;
  height: 348px;
`;

//ListView.js
export const NoteCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const NoteCard = styled(Link)`
  width: 200px;
  height: 200px;
  border: 1px solid #c5c5c5;
  text-decoration: none;
  color: black;
`;

//NoteView.js
export const NoteViewLinks = styled.div`
  text-decoration: underline;
`;
export const NoteCardTitle = styled.h3``;
export const NoteCardText = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
