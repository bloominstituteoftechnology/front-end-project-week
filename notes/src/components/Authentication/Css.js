import styled from 'styled-components';

const LoginDiv = styled.div`
	height: 300px;
	margin-top: 50px;
	> form {
		display: flex;
	  flex-direction: column;
	  max-width: 250px;
	  width: 100%;
	  margin: 54px auto;
	  padding: 6%;
	  background-color: #84d1e1;
	  border-radius: 10px;
	  border: solid #197e83 3px
	}
	> form > input {
		font-size: 1.6rem;
		padding: 1%;
		margin: 10px 0;
		border: solid #707072 1px;
	}
	> form > button {
		font-size: 1.6rem;
		border: solid #707072 1px;
		&:hover{
			background-color:black;
			color: white;
		}
	}
`
export default  LoginDiv
