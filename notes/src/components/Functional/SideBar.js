import React from 'react';
import styled from 'styled-components';

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
background: #F2F1F2;
font-size: 26px;
outline: none;

&:hover {
  border-bottom: 1px solid gray;
}

&:focus {
  border-bottom: 1px solid gray'
}
`;

const Button = styled.button`
  display: ${props => (props.value ? 'block' : 'none')}
  margin: 0 0 10px 1.5%;
  border: 1px solid gray;
  background: #24B8BD;
  color: #FFF;
  padding: 5px 2%;
  border-radius: 2px;
  outline: none;
  font-size: 22px;
  font-weight: bold;
  
  &:hover {
    box-shadow: inset 0 2px 5px 0px gray;
  }
  
  &:active {
    box-shadow: inset 0 0 31px 5px cadetblue;
  }
  `;

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.checklist.title}</Title>
        <div>
          <TaskList>
            {this.props.tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                handleComplete={this.props.handleComplete}
              />
            ))}
          </TaskList>
        </div>
        <form>
          <Input
            name="newTodo"
            placeholder="Enter todo here"
            value={this.props.newTodo}
            onChange={this.props.handleChange}
          />
          <Button
            type="submit"
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

export default SideBar;
