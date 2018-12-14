import styled, { createGlobalStyle, keyframes } from 'styled-components';
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
	background: #4C132C;
	@import url('https://fonts.googleapis.com/css?family=Charm|Dancing+Script:400');
}
`;
export const AppContainer = styled.div`
	z-index: 0;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	position: relative;
	border: 3px dashed #c3d2d5;
	background: #37515f;
	border-radius: 10%;
	width: 750px;
	z-index: 10;
`;
export const pulse = keyframes`
0% { transform: scale(1)
}

50% { transform: scale(1.05)}

100% { transform: scale(1)}
`;


export const Nav = styled.nav`
	display: flex;
	flex-flow: row wrap;
	width: 25%;
	position: absolute;
	right: 5px;
	align-items: center;
	border: 2px solid #c3d2d5;
	justify-content: center;
	padding: 5%;
	border-radius: 50%;
	background: #e4959e;
`;
export const Button = styled.button`
font-family: 'Charm', cursive;
	text-decoration: none;
	font-size: 1.6rem;
	color: white;
	padding: ${(props) => (props.component === 'form' ? '2.5%' : '5%')};
	margin: ${(props) => (props.component === 'single' ? '2.5%' : '5% 1%')};
	border: 2px solid #ffffff;
	border-radius: 10px;
	width: 150px;
	background: #4C132C;
	font-weight: bold;
	text-align: center;
	:hover {
		animation: ${pulse} 1s infinite;
		background: white;
		color: #4C132C;
		border: 2px dashed #4C132C;
		cursor: pointer;
	}
	:focus {
		outline: none;
	}
`;

export const Main = styled.main`
	background: #e4959e;
	border: 2px solid #c3d2d5;
	width: 50%;
	padding: 1% 5% 0;
	margin: 1% 2%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	border-radius: 150px;
	height: 95vh;
	opacity: ${(props) => (props.component === 'delete' ? '.5' : null)};
`;
export const Div = styled.div`
	position: ${(props) => (props.component === 'delete' ? 'absolute' : null)};
	z-index: ${(props) => (props.component === 'delete' ? '10' : null)};
	opacity: ${(props) => (props.component === 'delete' ? '1' : null)};
	right: ${(props) => (props.component === 'delete' ? '-9.5%' : null)};
	top: ${(props) => (props.component === 'delete' ? '25%' : null)};
	background: ${(props) => (props.component === 'delete' ? '#4C132C' : null)};
	border-radius: ${(props) => (props.component === 'delete' ? '10px' : null)};
	height: ${(props) => (props.component === 'delete' ? '30vh' : null)};
	width: ${(props) => (props.component === 'delete' ? '270px' : '400px')};
	border: ${(props) =>
		props.component === 'delete' ? '2px dashed #FFF' : null};
	display: flex;
	margin: 2.5% 10%;
	padding: 5% 0;
	justify-content: space-around;
	align-items: center;
	flex-flow: row wrap;
`;


export const Section = styled.section`
	width: 100px;
	height: 125px;
	overflow: hidden;
	display: flex;
	background: #4C132C;
	flex-flow: column nowrap;
	align-items: center;
	position: relative;
	justify-content: center;
	padding: 5%;
	border-radius: 10%;
	margin: 2.5% 0;
	text-align: center;
	border: 2px dashed #fff;
	color: #fff;
	:hover {
		animation: ${pulse} 1s infinite;
		background: white;
		color: #4C132C;
		border: 2px dashed #4C132C;
		border-radius: 10%;
		cursor: pointer;
	}
`;
export const H1 = styled.h1`
font-family: 'Dancing Script', cursive;
	font-size: 3rem;
	color: ${(props) => (props.component === 'delete' ? '#FFFFFF' : '#4C132C')};
	text-align: center;
	justify-self: flex-start;
	font-weight: bold;
`;
export const H2 = styled.h2`
	font-family: 'Charm', cursive;
	text-align: center;
	font-size: ${(props) => (props.component === 'single' ? '2.4rem' : '1.4rem')};
	padding: 0 5%;
	color: ${props => props.sort ? '#FFFFFF' : null};
	margin-bottom: 2.5%;
	cursor: ${props => props.sort ? 'pointer' : null};
	:hover{
		color: ${props => props.sort ? '#4C132C' : null};
	}
`;

export const P = styled.p`
	font-family: 'Charm', cursive;
	font-size: ${(props) => (props.component === 'single' ? '1.2rem' : '1.4rem')};
	background: ${(props) => (props.component === 'single' ? '#FFFFFF' : null)};
	border: ${(props) =>
		props.component === 'single' ? '2px dashed #4C132C' : null};
	padding: ${(props) => (props.component === 'single' ? '5%' : null)};
	width: 300px;
	height: 50vh;
	overflow: hidden auto;
	text-align: justify;
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: #c3d2d5;
	}
	::-webkit-scrollbar-thumb {
		background: #4C132C;
	}
`;

export const Form = styled.form`
	justify-content: space-between;
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
	position: ${props => props.component === 'main' ? 'absolute' : null};
	top: ${props => props.component === 'main' ? '5%' : null};
	right: ${props => props.component === 'main' ? '5%' : null};
	width: ${props => props.component === 'main' ? '25%' : '450px'};
	height: 95vh;
`;
export const Input = styled.input`
	width: ${props => props.component === 'main' ? '100%' : '40%'};
	padding: 2.5%;
	font-family: 'Charm', cursive;
	border-radius: 10px;
	margin-top: 5%;
	border: 2px dashed #4C132C;
	text-align: center;
	:focus {
		outline: none;
	}
`;
export const Textarea = styled.textarea`
	width: 50%;
	padding: 20%;
	font-family: 'Charm', cursive;
	border-radius: 50%;
	border: 2px dashed #4C132C;
	text-align: center;
	margin-top: 5%;
	:focus {
		outline: none;
	}
`;
