import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

const Container = styled.div`
  margin: 10px 0;
  border: 1px solid gray;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

const Input = styled.input`
  display: block;
  width: 30%;
  margin: 5px 0 20px 1.5%;
  padding-top: 5px;
  border-radius: 2px;
  border: none;
  background: #f2f1f2;
  font-size: 1.6rem;
  outline: none;

  &:hover {
    border-bottom: 1px solid grey;
  }

  &:focus {
    border-bottom: 1px solid grey;
  }
`;

const Button = styled.button`
  display: ${props => (props.value ? 'block' : 'none')};
  margin: 0 0 10px 1.5%;
  border: 1px solid gray;
  background: #24b8bd;
  color: #fff;
  padding: 5px 2%;
  border-radius: 2px;
  outline: none;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    box-shadow: 0px 2px 5px 0px grey;
  }

  &:active {
    box-shadow: inset 0 0 31px 5px cadetblue;
  }
`;

class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  handleComplete={this.props.handleComplete}
                />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        <form>
          <Input
            name="newTodo"
            placeholder="Add todo"
            value={this.props.newTodo}
            onChange={this.props.handleChange}
          />
          <Button
            tupe="submit"
            onClick={this.props.handleClick}
            value={this.props.newTodo}
          >
            Save
          </Button>
        </form>
      </Container>
    );
  }
}

export default Column;
