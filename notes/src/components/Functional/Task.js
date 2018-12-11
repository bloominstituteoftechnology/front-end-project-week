import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgray;
  font-size: 22px;
  padding: 8px;
  margin-bottom: 8px;
  background: white;

  input ~ label {
    text-decoration: ${props =>
      props.children[0].props.checked ? 'line-through' : 'none'};
  }

  label {
    margin-left: 1%;
  }
`;

class Task extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <input
            type="checkbox"
            checked={this.props.task.complete}
            onChange={() => this.props.handleComplete(this.props.task.id)}
          />
          <label>{this.props.task.content}</label>
        </Container>
      </div>
    );
  }
}

export default Task;
