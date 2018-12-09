import React from "react";
import styled from "styled-components";
import axios from "axios";

import Todo from "../Todo/Todo";

const TodoListContainer = styled.div`
	background-color: #f2f1f2;
    width: 100%;
	padding: 40px;
	display: flex;
    flex-wrap: wrap;
    
    h2 {
        width: 100%;
    }
`;

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            todos: [],
            title: '',
            tags: '',
            textBody: ''
		};
	}

	componentDidMount() {
		axios
			.get("https://fe-notes.herokuapp.com/note/get/all")
			.then(res => {
				console.log("Server Response :", res);
				this.setState({ todos: res.data });
			})
			.catch(err => {
				console.log("Server Error: ", err);
			});
	}

	render() {
		return (
			<TodoListContainer>
				<h2 className="lamba-notes-header">Your Notes:</h2>
				{this.state.todos.map(todo => {
					return (
                        <Todo 
                            key={todo.id}
                            title={todo.title}
                            tags={todo.tags}
                            textBody={todo.textBody}
                        />
                    )
				})}
			</TodoListContainer>
		);
	}
}

export default TodoList;
