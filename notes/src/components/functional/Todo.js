import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { getTasks, addTask, complete } from "../../store/actions";
import Column from "./Column";

class Todo extends React.Component {
  state = {
    tasks: this.props.tasks,
    columns: {
      "column-1": {
        id: "column-1",
        title: "Checklist",
        taskIds: ["task-1", "task-2", "task-3", "task-4"]
      }
    },
    columnOrder: ["column-1"],
    newTodo: ""
  };

  componentDidMount() {
    console.log("mount");
    this.props.getTasks();
  }

  componentDidUpdate(prevProps) {
    const newTaskIds = Object.keys(this.props.tasks);
    if (this.props.tasks !== prevProps.tasks) {
      this.setState({ tasks: this.props.tasks });
    }
    if (newTaskIds.length !== Object.keys(prevProps.tasks).length) {
      this.setState({
        columns: {
          "column-1": { ...this.state.columns["column-1"], taskIds: newTaskIds }
        }
      });
    }
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };

    this.setState(newState);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleComplete = taskID => {
    this.props.complete(taskID);
  };

  handleClick = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTodo);
    this.setState({ newTodo: ''})
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          let tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              newTodo={this.state.newTodo}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              handleComplete={this.handleComplete}
            />
          );
        })}
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    taskChange: state.taskChange
  };
};

export default connect(
  mapStateToProps,
  { getTasks, addTask, complete }
)(Todo);
