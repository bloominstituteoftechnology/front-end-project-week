import React from "react";

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checklist: ["todo 1", "todo 2", "MVP"],
      todo: ""
    };
  }

  todoHandler = e => {
    this.setState({todo: e.target.value});
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.todoHandler(e)}
          value={this.state.todo}
          placeholder="Add new todo"
        />
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
