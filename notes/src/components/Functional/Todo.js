import React from 'react';
import { connect } from 'react-redux';

import { getTasks, addTask, complete } from '../../Store/actions';
import SideBar from './SideBar';

class Todo extends React.Component {
  state = {
    tasks: this.props.tasks,
    checklist: {
      'checklist-1': {
        id: 'checklist-1',
        title: 'Checklist',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
      }
    },
    checklistOrder: ['checklist-1'],
    newTodo: ''
  };

  componentDidMount() {
    console.log('This component mounted');
    this.props.getTasks();
  }

  componentDidUpdate(previousProps) {
    const newTaskIds = Object.keys(this.props.tasks);
    if (this.props.tasks !== previousProps.tasks) {
      this.setState({ tasks: this.props.tasks });
    }
    if (newTaskIds.length !== Object.keys(previousProps.tasks).length) {
      this.setState({
        checklist: {
          'checklist-1': {
            ...this.state.checklist['checklist-1'],
            taskIds: newTaskIds
          }
        }
      });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleComplete = taskID => {
    this.props.complete(taskID);
  };

  handleClick = event => {
    event.preventDefault();
    this.props.addTask(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  render() {
    return (
      <div>
        {this.state.checklistOrder.map(checklistId => {
          const checklist = this.state.checklist[checklistId];
          let tasks = checklist.taskIds.map(taskId => this.state.tasks[taskId]);

          return (
            <SideBar
              key={checklist.id}
              checklist={checklist}
              tasks={tasks}
              newTodo={this.state.newTodo}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              handleComplete={this.handleComplete}
            />
          );
        })}
      </div>
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
