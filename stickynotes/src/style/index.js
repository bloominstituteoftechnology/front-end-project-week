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
	box-shadow: 1px -2px 14px 3px rgba(0, 0, 0, 0.34);
	-webkit-box-shadow: 1px -2px 14px 3px rgba(0, 0, 0, 0.34);
	-moz-box-shadow: 1px -2px 14px 3px rgba(0, 0, 0, 0.34);
	display: flex;
	margin: 30% 0 0;
	position: relative;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 100vh;
	background: lightgrey;
`;

export const Nav = styled.nav`
	display: flex;
	flex-flow: column nowrap;
	width: 25%;
	align-items: center;
	justify-content: flex-start;
	padding: 5%;
	background: lightgrey;
`;
export const Button = styled.button`
	text-decoration: none;
	font-size: 1.6rem;
	color: white;
	padding: ${props => props.component === 'form' ? '2.5%' : "5%"};
	margin: 5% 0;
	border: 1px solid grey;
	width: 200px;
	background: lightseagreen;
	font-weight: bold;
	:hover {
		background: white;
		color: lightseagreen;
		cursor: pointer;
	}
	:focus {
		outline: none;
	}
`;

export const Main = styled.main`
	background: white;
	border-left: 1px solid black;
	width: 75%;
	padding: 5% 0;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;
export const Div = styled.div`
	margin: 1% 0 0;
	justify-content: space-around;
	align-items: center;
	display: flex;
	flex-flow: ${props => props.view === 'single' ? 'column nowrap' : 'row wrap'};
	width: 425px;
	height: 85vh;
`;

export const Section = styled.section`
	width: 100px;
	height: 100px;
	overflow: hidden;
	color: white;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	padding: 2.5%;
	margin: 2.5% 1%;
	border: 1px solid lightgray;
`;
export const H1 = styled.h1`
	font-size: 2.6rem;
	color: black;
	text-align: center;
	justify-self: flex-start;
	font-weight: bold;
`;
export const H2 = styled.h2`
	font-size: 1.6rem;
	color: black;
	font-weight: bold;
	border-bottom: 1px solid lightgray;
	margin-bottom: 10%;
`;

export const P = styled.p`
	font-size: 1.2rem;
	color: black;
	text-align: left;
`;

export const Form = styled.form`
	margin: 1% 0 0;
	justify-content: space-between;
	align-items: flex-start;
	display: flex;
	flex-flow: column nowrap;
	width: 450px;
	height: 88vh;
`
export const Input = styled.input`
width: 50%;
padding: 1%;
border-radius: 5px;
margin-top: 5%;
border: 1px solid grey;
text-align: center;
:focus{
	outline: none;
}
`
export const Textarea = styled.textarea`
width:85%;
padding: 5%;
border-radius: 5px;

:focus{
	outline: none;
}
`
