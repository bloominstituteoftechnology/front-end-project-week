import styled from 'styled-components';

export const WeatherDiv = styled.div`
	display: flex;
	margin-top: 20px;
	margin-left: 27%;
`;

export const WeatherSubDiv = styled.div`
	margin-right: 2%;
	padding: 2%;
	border: solid #2e63f8 1px;
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 4px;
	background-color: #d9dafe;
	font-family: 'Open Sans', sans-serif;
	> div {
		margin-top: 5px;
	}
`
export const WeatherFormDiv = styled.div`
	padding-left: 204px;
	display: flex;
	margin-top: 10px;
  flex-direction: column;
  max-width: 30%;
  margin-left: 17.5%;
	> form {
		display: flex;
		flex-direction: column;
	}
`;

export const City = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 4rem;
  margin-left: 15%;
`;

