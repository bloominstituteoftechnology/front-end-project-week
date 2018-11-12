import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
margin:0 auto;
width:100%;
max-width:1140px;
border:1px dotted red;
`;

export const HeaderNav = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
height:70px;
background-color:#fff;
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
border:1px dotted red;
`;

export const Sidebar =styled.div`
display:flex;
flex-direction:column
justify-content:center;
align-items:center;
width:25%;
max-width:265px;
border:1px dotted black;
height:800px;
`;

export const Mainbar = styled.div`
display:flex;
flex-direction:column
justify-content:center;
align-items:center;
width:75%;
max-width:855px;
border:1px dotted black;
height:800px;
`;