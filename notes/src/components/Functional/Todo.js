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
