import React, { Component } from "react";
const SingleTodo = props => {
	return [<div>{props.todo.text}</div>, <div>{props.todo.title}</div>];
};

export default SingleTodo;
