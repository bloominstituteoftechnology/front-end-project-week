import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
margin:0 auto;
width:100%;
max-width:1140px;
//border:1px dotted red;
`;

export const HeaderNav = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
height:70px;
background-color:#fff;
margin-bottom:20px;
`;

export const Nav = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center
width:20%;
`;

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
margin:0 auto;
width:100%;
max-width:1140px;
//border:1px dotted red;
`;

export const Sidebar =styled.div`
display:flex;
flex-direction:column
//justify-content:center;
//align-items:center;
width:100%;
max-width:265px;
border:1px dotted black;
padding:35px;
height:825px;
background-color:darkgrey;
`;

export const Mainbar = styled.div`
display:flex;
flex-flow:row wrap;
padding-left:10px
padding-right:10px;
width:100%;
max-width:855px;
height:auto;
`;

export const Notecard = styled.div`
display:flex;
flex-direction:column
// justify-content:center;
// align-items:center;
width:100%;
max-width:265px;
height:280px;
padding:10px;
margin-right:10px;
margin-bottom:15px;
border:1px solid lightgray;
`;

export const FormContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
max-width:855px;
padding:10px;
//border:1px solid red;
`;

export const NoteContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
max-width:855px;
padding:10px;
`;

export const ViewCard = styled.div`
display:flex;
flex-direction:column
width:100%;
height:auto;
padding:10px;
margin-right:10px;
margin-bottom:15px;
border:1px solid lightgray;
`;