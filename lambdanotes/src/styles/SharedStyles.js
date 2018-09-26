import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
	width: 100%;
	padding: 0 28px;

	${props =>
		props.list &&
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
