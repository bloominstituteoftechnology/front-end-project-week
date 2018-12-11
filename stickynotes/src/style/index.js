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
	background: #1F0812;
	@import url('https://fonts.googleapis.com/css?family=Oswald:200,400|Pacifico');
}
`;
export const AppContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items:center;
	position: relative;
	background: #37515F;
	border-radius: 10%;
	width: 700px;
	padding-right: 5%;
	z-index: 10;
`;

export const Nav = styled.nav`
	display: flex;
	flex-flow: row wrap;
	width: 30%;
	position: absolute;
	right: 0;
	align-items: center;
	border: 2px solid #C3D2D5;
	justify-content: center;
	padding: 5%;
	border-radius: 50%;
	background: #E4959E;
`;
export const Button = styled.button`
	text-decoration: none;
	font-size: 1.6rem;
	color: white;
	padding: ${props => props.component === 'form' ? '2.5%' : "5%"};
	margin: ${props => props.component === 'single' ? '2.5%' : "5% 1%"};
	border: 2px solid #FFFFFF;
	border-radius: 10px;
	width: 100px;
	background: #1F0812;
	font-weight: bold;
	:hover {
		background: white;
		color: #1F0812 ;
		border: 2px dashed #1F0812;
		cursor: pointer;
	}
	:focus {
		outline: none;
	}
`;

export const Main = styled.main`
	background: #E4959E;
	border: 2px solid #C3D2D5;
	width: 50%;
	padding: 2.5% 5% 0;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10%;
	height: 95vh;
`;
export const Div = styled.div`
	display: flex;
	margin: 2.5% 10%;
	padding: 5% 0;
	justify-content: space-around;
	align-items: center;
	flex-flow: row wrap;
	width: 400px;
`;

export const Section = styled.section`
	width: 100px;
	height: 125px;
	overflow: hidden;
	display: flex;
	background: #1F0812;
	flex-flow: column nowrap;
	align-items: center;
	position: relative;
	justify-content: center;
	padding: 5%;
	border-radius: 10%;
	margin: 2.5% 0;
	border: 2px dashed #FFF;
	color: #FFF;
	:hover {
		background: white;
		color: #1F0812 ;
		border: 2px dashed #1F0812;
		border-radius: 10%;
		cursor: pointer;
	}
`;
export const H1 = styled.h1`
	font-size: 2.6rem;
	color: #1F0812;
	text-align: center;
	justify-self: flex-start;
	font-weight: bold;
`;
export const H2 = styled.h2`
	text-align: justify;
	font-size: ${props => props.component === 'single' ? '3.2rem' : '1.4rem'};
	font-weight: bold;
	border-bottom: 1px solid #FFF;
	margin-bottom: 2.5%
`;

export const P = styled.p`
	font-size: ${props => props.component === 'single' ? '1.2rem' : '1.4rem'};
	background: ${props => props.component === 'single' ? '#FFFFFF' : null};
	border: ${props => props.component === 'single' ? '2px dashed #1F0812' : null};
	padding:${props => props.component === 'single' ? '5%' : null}; 
	width: 300px;
	height: 50vh;
	overflow: hidden auto;
	text-align: justify;
	::-webkit-scrollbar {
 	 width: 10px;
};
::-webkit-scrollbar-track {
  background: #C3D2D5; 
};
::-webkit-scrollbar-thumb {
  background: #1F0812; 
}

`;

export const Form = styled.form`
	justify-content: space-between;
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
	width: 450px;
	height: 95vh;
`
export const Input = styled.input`
width: 40%;
padding: 2.5%;
border-radius: 10px;
margin-top: 5%;
border: 2px dashed #1F0812;
text-align: center;
:focus{
	outline: none;
}
`
export const Textarea = styled.textarea`
width:50%;
padding: 20%;
border-radius: 50%;
border: 2px dashed #1F0812;
text-align: center;
margin-top: 5%;
:focus{
	outline: none;
}
`
