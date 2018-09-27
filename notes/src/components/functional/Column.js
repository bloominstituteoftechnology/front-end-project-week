import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

const Container = styled.div`
  margin: 10px 0;
  border: 1px solid gray;
`
const Title = styled.h3`
  padding: 8px;
`

const TaskList = styled.div`
  padding: 8px
`;

class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided) => (
              <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
      </Container>
    )
  }
}

export default Column;

