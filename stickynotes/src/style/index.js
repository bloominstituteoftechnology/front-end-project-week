import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

html, body{
  height:100%;
}
html{
	font-size: 62.5%;
}
body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: grey;
	@import url('https://fonts.googleapis.com/css?family=Oswald:200,400|Pacifico');
}
`;
export const AppContainer = styled.div`
box-shadow: 1px -2px 14px 3px rgba(0,0,0,0.34);
-webkit-box-shadow: 1px -2px 14px 3px rgba(0,0,0,0.34);
-moz-box-shadow: 1px -2px 14px 3px rgba(0,0,0,0.34);
display: flex;
margin: 30% 0 0;
position: relative;
flex-flow: row nowrap;
justify-content: center;
align-items: flex-start;
width: 800px;

background: lightgrey;
`

export const Nav = styled.nav`

display: flex;
flex-flow: column nowrap;
width: 25%;
align-items: center;
justify-content: center;
padding:0 5%;
height: 100vh;
background: lightgrey;
`
export const Button = styled.button`
text-decoration: none;
font-size: 1.6rem;
color: white;
padding: 5%;
margin: 5% 0;
border: 1px solid grey;
width: 200px;
background: lightseagreen;
font-weight: bold;
`

export const Main = styled.main`
background: white;
border-left: 1px solid black;
width: 70%;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
`

export const Section = styled.section`
width: 100px;
height: 100px;
overflow: hidden;
color: white;
display: flex;
flex-flow: column nowrap;
align-items: flex-start;
padding: 2.5%;
margin: 1%;
border: 1px solid lightgray;
`
export const H1 = styled.h1`
font-size: 1.8rem;
color: black;
font-weight: bold;
border-bottom: 1px solid lightgray;
margin-bottom: 10%;
`

export const P = styled.p`
font-size: 1.2rem;
color: black;
text-align: left;
`