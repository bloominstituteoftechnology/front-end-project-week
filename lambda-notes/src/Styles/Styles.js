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
`;

export const LinkContainer = styled.span`
   display: flex;
   justify-content: flex-end;
   a {
      margin-right: 10px;
      font-size: 1.6rem;
      font-weight: bold;
      text-decoration-line: underline;
   }
   p {
      margin-left: 2%
   }
`;

export const Content =styled.div`
   cursor: pointer;
   h2 {
      overflow-wrap: break-word;
      margin-top: 0px;
      margin-bottom: 0px;
   }
   p {
      overflow-wrap: break-word;
      white-space: pre-line;
   }
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

export const DeleteContainer = styled.div`
   position: absolute;
   text-align: center;
   background: rgb(211, 211, 211, 0.9);
   height: 100%;
   width: 100%;
   min-height: 800px;
`;

export const DeleteBox = styled.div`
   position: fixed;
   left: 168px;
   top: 112px;
   background-color: white;
   width: 50%;
   margin: 50px auto;
   border: 1px solid black;
   padding: 40px;
   z-index: 6;
   p {
      margin-bottom: 20px;
      margin-left: 0;
   }
`;