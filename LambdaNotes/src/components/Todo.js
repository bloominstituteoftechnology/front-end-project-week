import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// actions
import { deleteTodo, toggleTodo } from "../actions/index";
// material components
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
// styles
import "../styles/Todo.css";
import "../styles/animation.css";

const styles = theme => ({
    todoButton: {
        fontSize: "1.5rem",
        width: "150px",
        "&:hover": {
            color: "white",
            backgroundColor: "black"
        }
    },
    dialog: {
        fontSize: "1.5rem"
    },
    deleteBtn: {
        fontSize: "1rem"
    },
    closeModalBtn: {
        fontSize: "1rem",
        "&:hover": {
            color: "white",
            backgroundColor: "#26c6da"
        }
    }
});

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            showList: false
        };
    }
    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleDeleteTodo = id => {
        this.props.deleteTodo(id);
    };
    handleShowList = () => {
        this.setState({ toggled: !this.state.showList });
    };
    handleComplete = id => {
        this.props.toggleTodo(this.props.todos[id].id);
    };

    render() {
        const { id } = this.props.match.params;
        const { classes } = this.props;

        return [
            <div className="fade" style={{ marginTop: "70px" }}>
                {/* Delete Modal */}
                <Dialog
                    className={classes.dialog}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <DialogContent>
                        <p>Are you sure you want to delete this?</p>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.handleClose();
                                this.handleDeleteTodo(id);
                            }}
                            className={classes.deleteBtn}
                            color="secondary"
                        >
                            Delete
                        </Button>
                        <Button
                            onClick={this.handleClose}
                            className={classes.closeModalBtn}
                        >
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* Note/List View Toggle, Edit Delete Buttons */}
                <div className="Todo_button_container">
                    <Link
                        to={{
                            pathname: "/editTodo",
                            state: {
                                id: id
                            }
                        }}
                        style={{ textDecoration: "none" }}
                    >
                        <Button className={classes.todoButton}>Edit</Button>
                    </Link>
                    <Button
                        className={classes.todoButton}
                        onClick={this.handleOpen}
                    >
                        Delete
                    </Button>
                </div>
                {/*	NOTE VIEWS */}
                {this.props.todos.includes(this.props.todos[id]) ? (
                    // NORMAL VIEW - read a todo with no line breaks
                    <Paper className="Todo_content">
                        <h3 className="Todo_header">
                            {this.props.todos[id].title}
                        </h3>
                        <p
                            style={{
                                textDecoration: this.props.todos[id].isComplete
                                    ? "line-through"
                                    : "none"
                            }}
                            className="Todo_text"
                            onClick={() => this.handleComplete(id)}
                        >
                            {this.props.todos[id].text}
                        </p>
                    </Paper>
                ) : (
                    <Redirect to="/" />
                )}
            </div>
        ];
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    {
        deleteTodo,
        toggleTodo
    }
)(withStyles(styles)(Todo));
