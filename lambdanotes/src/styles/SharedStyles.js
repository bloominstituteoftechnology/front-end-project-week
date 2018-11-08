import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
	width: 100%;
	padding: 0 28px;

	${props =>
		props.listPage &&
		css`
			padding-right: 8px;
		`};
`;

export const PageTitle = styled.h2`
	font-size: 2rem;
	font-weight: bold;
	color: #4a494a;
	margin: 56px 0 30px;

	${props =>
		props.note &&
		css`
			margin-top: 21px;
		`};
`;

export const StatusMessage = styled.h4`
	font-size: 1.6rem;

	${props =>
		props.error &&
		css`
			color: red;
		`};
`;

export const StyledInput = styled.input`
	width: 358px;
	height: 43px;
	padding: 12px;
	border: 1px solid #9a9a9a;
	border-radius: 3px;

	&::placeholder {
		font-size: 1.2rem;
	}
`;

export const StyledTextArea = styled.textarea`
	font-family: inherit;
	width: 100%;
	height: 348px;
	padding: 22px;
	border: 1px solid #9a9a9a;
	border-radius: 3px;
	margin: 14px 0 12px;
	resize: none;

	&::placeholder {
		font-size: 1.2rem;
	}
`;

// WHY CAN'T I MAKE TAG AGNOSTIC STYLED-COMPONENTS
export const SubmitInput = styled.input`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 191px;
	height: 43px;
	font-size: 1.5rem;
	font-weight: bold;
	text-decoration: none;
	color: white;
	background: #24b8bd;
	border: 1px solid #969696;
	cursor: pointer;
`;
// I'M SO WET RIGHT NOW
export const SubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 191px;
	height: 43px;
	font-size: 1.5rem;
	font-weight: bold;
	text-decoration: none;
	color: white;
	background: #24b8bd;
	border: 1px solid #969696;
	cursor: pointer;

	${props =>
		props.red &&
		css`
			background: #ca001a;
		`};
`;
