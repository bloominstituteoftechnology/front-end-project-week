import React, { Component } from "react";
// material components
import Snackbar from "@material-ui/core/Snackbar";
// components
import SingleTodo from "./SingleTodo";
import SearchBar from "./SearchBar";
// styles
import "../styles/SingleTodos.css";
import "../styles/animation.css";

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoHideDuration: 4000,
            message: "",
            open: false
        };
    }
    // snackbar handlers
    handleClick = msg => {
        this.setState({
            open: true,
            message: msg
        });
    };
    handleActionClick = () => {
        this.setState({
            open: false
        });
    };
    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return (
            <div className="container fade">
                <SearchBar />
                <h3 className="Notes__header">Your Notes:</h3>
                {this.props.todos.map((todo, index) => {
                    return (
                        <SingleTodo
                            key={todo.id}
                            todo={todo}
                            index={index}
                            handleClick={this.handleClick}
                        />
                    );
                })}
                <Snackbar
                    open={this.state.open}
                    message={this.state.message}
                    action="undo"
                    autoHideDuration={this.state.autoHideDuration}
                    onActionClick={this.handleActionClick}
                    onRequestClose={this.handleRequestClose}
                />
                <Snackbar
                    open={this.state.open}
                    message={this.state.message}
                    action="undo"
                    autoHideDuration={this.state.autoHideDuration}
                    onActionClick={this.handleActionClick}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

export default Todos;
