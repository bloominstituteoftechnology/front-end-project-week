import styled from 'styled-components';

export const Aside = styled.div`
	width:25%;
	position: fixed;
	top: 0;
	width: 13.5em;
	height: 100%;
	background-color: #bebebe;
	border: solid #838383 1px;
	> h1 {
		font-size: 2.2rem;
		font-weight: bold;
		color: #4b4b4b;
		margin: 15px 0 15px 5%;
	}
	> p {
		margin: 0 0 15px 5%;
	}
`;

export const DivClick = styled.div`
	margin: 0 5% 15px 5%;
	text-align: center;
	padding 5%;
	border: solid #005778 .5px;
	background-color: #4aacac;
	> p {
		color: white;
	}
	&:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

export const Log = styled.p`
	text-transform:capitalize;
`;

export const NewsH2 = styled.h2`
	margin-left: 5%;
	padding: 2%;
	padding-bottom: 0;
`;

export const NewsDiv = styled.div`
	font-size: 1rem;
	overflow: scroll;
	margin-left: 5%;
	margin-right: 5%;
	padding: 2%;
	padding-top: 0;
	margin-top: 5px;
	> a > p {
		margin-top: 5px;
	}
`;

export const NewsOrg = styled.p`
	padding-top: 5px;
	margin-left: 5%;
`
