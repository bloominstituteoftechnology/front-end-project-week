import React, { Component } from "react";

const SingleTodoView = props => {
  console.log("Single page view!", props.match.params.id);
  console.log("and..", props.reduxProps.todos);
  console.log(
    "finally..",
    props.reduxProps.todos.filter(todo => {
      return todo._id.includes(props.match.params.id);
    })
  );
  return (
    <div>
      {/* {props.reduxProps.todos.filter(todo => {
        return todo._id === props.match.params.id ? "yep" : "Nope";
      })} */}

      {props.reduxProps.todos.map(todo =>
        todo._id === props.match.params.id
          ? `${todo.title} ${todo.textBody}`
          : null
      )}
    </div>
  );
};

export default SingleTodoView;

{
  /* <PostContainer 
posts={props.posts.filter(post => {
    return post.username.includes('playhearthstone')
})}
/> */
}
