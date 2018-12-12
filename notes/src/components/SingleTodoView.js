import React, { Component } from "react";

const SingleTodoView = props => {
  console.log("Single page view!", props);
  return <div>{props.reduxProps.todos[2].title}</div>;
};

export default SingleTodoView;
