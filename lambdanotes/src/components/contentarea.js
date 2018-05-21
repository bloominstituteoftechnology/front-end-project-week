import React from 'react';

const ContentArea = (props) => {
  switch (props.appState) {
    case "list":
      return (
        <div>I'm a list!</div>
      );
    default:
      return (
        <div />
      );
  }
  return (
    <div>{props.appState}</div>
  );
}

export default ContentArea;
