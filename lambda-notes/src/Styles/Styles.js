import styled from "styled-components";

export const AppContainer = styled.div`
   box-sizing: border-box;
   width: 100%;
   margin: 0 auto;
   max-width: 885px;
   display: flex;
   border: 1px solid #afafaf;
   height: 100vh;
`;

export const HeaderContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: silver;
   width: 20%;
   min-width: 130px;
   padding-bottom: 50px;
`;

export const Buttons = styled.button `
   background-color: ${props => props.bgColor || "lightseagreen"};
   color: white;
   font-weight: bold;
   font-size: 1.3rem;
   padding: 10px 25px;
   margin-bottom: 14px;
   cursor: pointer;
   white-space: nowrap;
   width: ${props => props.width || "95%"};
   max-width: ${props => props.maxWidth || "200px"};
`;

export const DisplayContainer = styled.div`
   display: flex;
   flex-direction: column;
   background-color: whitesmoke;
   width: 100%;
   max-width: 665px;
   padding: 0px 30px;
   padding-top: 30px;
   padding-bottom: 20px;
`;

export const NoteListContainer = styled.div`
   width: 665px;
   display: flex;
   flex-wrap: wrap;
   text-decoration: none;
   color: black;
`;

export const LinkContainer = styled.span`
   display: flex;
   justify-content: flex-end;
   a {
      margin-right: 10px;
      font-size: 1.6rem;
      font-weight: bold;
      text-decoration: none;
   }
   p {
      margin-left: 2%
   }
`;

export const Content =styled.div`
   word-break: keep-all;
   text-decoration: none;
`;

export const InputHeader = styled.input `
   display: flex;
   background-color: white;
   color: black;
   padding: 10px 5px;
   margin-bottom: 14px;
   max-width: 600px;
   width: 60%;
   border-radius: 5px;
`;

export const InputBody = styled.textarea `
   background-color: white;
   color: black;
   vertical-align: top;
   padding: 10px 12px;
   max-width: 800px;
   width: 95%;
   margin-bottom: 14px;
   border-radius: 5px;
   height: 300px;
   resize: none;
`;
