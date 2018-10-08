import React, { Component } from "react";
// material components
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
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
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                    message={
                        <span style={{ fontSize: "1.5rem", color: "#26c6da" }}>
                            {this.state.message}
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            color="inherit"
                            onClick={this.handleRequestClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                    autoHideDuration={4000}
                />
            </div>
        );
    }
}

export default Todos;
