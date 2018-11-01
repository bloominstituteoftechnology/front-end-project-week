import React from "react";
import "./Notes.css";

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checklist: [],
      todo: ""
    };
  }

  todoHandler = e => {
    this.setState({todo: e.target.value});
  };

  addTodo = (e, newTodo) => {
    e.preventDefault();
    this.setState({checklist: this.state.checklist.concat(newTodo), todo: ""});
  };

  render() {
    return (
      <div className="checklist">
        <span>
          <form onSubmit={e => this.addTodo(e, this.state.todo)}>
            <input
              type="text"
              onChange={e => this.todoHandler(e)}
              value={this.state.todo}
              placeholder="Add new todo"
            />
            <button>Add</button>
          </form>
        </span>
        <ul>
          {this.state.checklist.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CheckList;
