import React from "react";
import styled from "styled-components";

const TodoCardContainer = styled.div`
	background-color: #ffffff;
	color: #20272d;
	width: 10%;
	/* max-width: 200px; */
	min-width: 150px;
    min-height: 150px;
    margin: 20px;
	padding: 15px;
	border: 1px solid #dbdbdb;
`;

const TodoCardTitle = styled.h4`
	color: #20272d;
	border-bottom: 1px solid #20272d;
	margin: 0 0 5px;
`;

const TodoCardContent = styled.div``;

const Todo = () => {
	return (
		<TodoCardContainer>
			<TodoCardTitle>Note Title</TodoCardTitle>
			<TodoCardContent>
				Laboris aliqua sit nostrud amet excepteur. Consequat pariatur
				laborum dolore officia aliquip. Et ea adipisicing pariatur
				dolore sint excepteur excepteur exercitation ipsum est ex.
				Nostrud irure deserunt esse et cillum ad cupidatat nisi culpa
				consequat eu sunt commodo fugiat.
			</TodoCardContent>
		</TodoCardContainer>
	);
};

export default Todo;
